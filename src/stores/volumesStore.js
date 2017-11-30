import { observable, action, computed } from 'mobx';
import agent from '../agent';

class VolumesStore {
  //@observable number;
  //@observable title;
  @observable volumesMap = observable.map();
  @observable isLoading = false;

  /*constructor(number, title, chapters) {
    this.number = number;
    this.title = title;
    this.chapters = chapters;
  }*/

  @computed get volumes() {
    return this.volumesMap.values();
  };

  @action addChapter({title, position, chapterId, volumeId}) {
    const currentVolume = this.volumesMap.get(volumeId);
    let newChaptersList = currentVolume.chapters;
    newChaptersList.splice(position, 0, { title: title, id: chapterId });
    this.volumesMap.delete(volumeId);
    this.volumesMap.set(volumeId, {
      id: volumeId,
      title: currentVolume.title,
      order_number: currentVolume.order_number,
      chapters: newChaptersList
    });
    //this.volumesMap.get(volumeId).chapters.splice({ title: title, id: chapterId }, 0, position);
  }

  @action deleteChapter({chapterId, volumeId}) {
    const currentVolume = this.volumesMap.get(volumeId);
    let newChaptersList = currentVolume.chapters.filter((chapter) => {
        return chapter.id !== chapterId;
    });
    this.volumesMap.delete(volumeId);
    this.volumesMap.set(volumeId, {
      id: volumeId,
      title: currentVolume.title,
      order_number: currentVolume.order_number,
      chapters: newChaptersList
    });
  }

  @action loadVolumes() {
    this.isLoading = true;
    agent.Volumes.all()
      .then(action((data)  => {
        this.volumesMap.clear();
        data.forEach(volume => this.volumesMap.set(volume.id, volume));//(volume.number, volume));
      }))
      .then(action(() => { this.isLoading = false; }));;
      //.then(action(() => { this.isLoading = false; }));
    //this.isLoading = true;
    /*return agent.Volumes.all()
      .then(action(( { data }) => {
        this.volumesMap.clear();
        data.forEach(volume => this.volumesMap.set(volume.number, volume));
      }));*/
      //.then(action(() => { this.isLoading = false; }));
    }
  }

export default new VolumesStore();
