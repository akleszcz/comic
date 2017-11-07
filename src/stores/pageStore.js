import { observable, action } from 'mobx';
import agent from '../agent';

class PageStore {
  @observable filename;
  @observable volumeNumber;
  @observable chapterNumber;
  @observable pageNumber;

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
    .then(action(({data}) => {
      this.filename = data;
    }))
    .then(action(() => { this.isLoading = false; }));
  }
}

export default new PageStore();
