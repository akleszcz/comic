import { observable, action } from 'mobx';

class ChaptersStore {
  //@observable number;
  //@observable title;
  @observable volumeNumber;
  @observable isLoading = false;
  @observable chapters = [];

  /*constructor(number, title, chapters) {
    this.number = number;
    this.title = title;
    this.chapters = chapters;
  }*/

  @action setVolumeNumber(volumeNumber) {
    if (this.volumeNumber !== volumeNumber) {
      this.chapters = [];
      this.volumeNumber = volumeNumber;
    }
  }

  @action load() {
    this.isLoading = true;
    return agent.Chapters.forVolume()
      .then(action(( { data }) => {
        this.chapters.clear();
        data.forEach(chapter => this.chapters.set(volume.number, volume.title));
      }))
      .finally(action(() => { this.isLoading = false; }));
    }
  }

export default new ChaptersStore();
