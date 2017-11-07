import { observable, action, computed } from 'mobx';
import agent from '../agent';

class ChapterStore {
  //@observable number;
  //@observable title;
  @observable volumeNumber;
  @observable chapterNumber;
  @observable isLoading = false;
  @observable thumbnails = [];

  @action setVolumeNumber(volumeNumber) {
    this.volumeNumber = volumeNumber;
  }

  @action setChapterNumber(chapterNumber) {
    this.chapterNumber = chapterNumber;
  }

  @computed get numberOfPages() {
    return this.thumbnails.length;
  }

  @action loadThumbnails() {
    this.isLoading = true;
    agent.Chapters.byNumber(this.volumeNumber, this.chapterNumber)
      .then(action(({data}) => {
        this.thumbnails = data;
      }))
      .then(action(() => { this.isLoading = false; }));
    }
  }

export default new ChapterStore();
