import { observable, action } from 'mobx';
import agent from '../agent';

class PageStore {
  @observable url;
  @observable volumeNumber;
  @observable chapterNumber;
  @observable pageNumber;
  @observable numberOfPages;

  @action setVolumeNumber(volumeNumber) {
    this.volumeNumber = volumeNumber;
  }

  @action setChapterNumber(chapterNumber) {
    this.chapterNumber = chapterNumber;
  }

  @action setPageNumber(pageNumber) {
    this.pageNumber = pageNumber;
  }

  @action loadPage() {
    this.isLoading = true;
    agent.Pages.byNumber(this.volumeNumber, this.chapterNumber, this.pageNumber)
    .then(action(({url, numberOfPages}) => {
      this.url = url;
      this.numberOfPages = numberOfPages;
    }))
    .then(action(() => { this.isLoading = false; }));
  }
}

export default new PageStore();
