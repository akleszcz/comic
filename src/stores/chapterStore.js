import { observable, action } from 'mobx';
import agent from '../agent';

class ChapterStore {
  //@observable number;
  //@observable title;
  @observable volumeNumber;
  @observable chapterNumber;
  @observable isLoading = false;
  @observable thumbnails = [];

  /*constructor(number, title, chapters) {
    this.number = number;
    this.title = title;
    this.chapters = chapters;
  }*/

  @action setVolumeNumber(volumeNumber) {
    this.volumeNumber = volumeNumber;
  }

  @action setChapterNumber(chapterNumber) {
    this.chapterNumber = chapterNumber;
  }

  @action loadThumbnails() {
    this.isLoading = true;
    agent.Chapters.byNumber(this.volumeNumber, this.chapterNumber)
      .then(action(({data}) => {
        //alert(JSON.stringify(data));
        this.thumbnails = data;
      }))
      .then(action(() => { this.isLoading = false; }));
    }
  }

export default new ChapterStore();
