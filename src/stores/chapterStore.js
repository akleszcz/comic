import { observable, action, computed } from 'mobx';
import agent from '../agent';

class ChapterStore {
  //@observable number;
  //@observable title;
  //@observable volumeNumber;
  //@observable chapterNumber;
  @observable id;
  @observable isLoading = false;
  @observable thumbnails = [];

  @action setId(id) {
    this.id = id;
  }

  @computed get numberOfPages() {
    return this.thumbnails.length;
  }

  @action loadThumbnails() {
    this.isLoading = true;
    agent.Chapters.byId(this.id)
      .then(action((data) => {
        this.thumbnails = data.thumbnails;
      }))
      .then(action(() => { this.isLoading = false; }));
    }
  }

export default new ChapterStore();
