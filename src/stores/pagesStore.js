import { observable, computed, action } from 'mobx';

class PagesStore {
  @observable filename;
  @observable volumeNumber;
  @observable chapterNumber;

  constructor(fileName) {
    this.fileName = fileName;
  }

  @action loadPages() {
    this.isLoading = true;

  }
}

export default new PagesStore();
