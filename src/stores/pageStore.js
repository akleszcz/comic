import { observable, action } from 'mobx';
import agent from '../agent';
import chapterStore from './chapterStore';
const camelCase = require('lodash.camelcase');
const renameKeys = require('rename-keys');

class PageStore {
  @observable isLoading;
  @observable currentPage = {
    id: ``,
    chapterId: ``,
    previousPageId: ``,
    nextPageId: ``,
    url: ``,
    numberOfPages: 0,
    number: 0
  };


  @action loadPage(id, { acceptCached = false }) {
    if (!id) {
      return Promise.resolve(this.currentPage);
    }
    if (acceptCached && this.currentPage && id === this.currentPage.id) {
      return Promise.resolve(this.currentPage);
    }
    this.isLoading = true;
    return agent.Pages.byId(id)
    .then(action(page => {
      const camelCasePage = renameKeys(page, function(key, val) {
        return camelCase(key);
      });
      this.currentPage.id =  camelCasePage.id;
      this.currentPage.chapterId =  camelCasePage.chapterId;
      this.currentPage.previousPageId =  camelCasePage.previousPageId;
      this.currentPage.nextPageId =  camelCasePage.nextPageId;
      this.currentPage.url =  camelCasePage.url;
      //this.currentPage = camelCasePage;
    }))
    .then(()=>chapterStore.loadChapter(this.currentPage.chapterId, { acceptCached: true }))
    .then(action(() => {
        this.currentPage.numberOfPages = chapterStore.numberOfPages;
        this.currentPage.firstPageId = chapterStore.firstPageId;
        this.currentPage.lastPageId = chapterStore.lastPageId;
        this.currentPage.number = chapterStore.numberOfPage(this.currentPage.id);
      })
    )
    .then(action(() => { this.isLoading = false; }));
  }
}

export default new PageStore();
