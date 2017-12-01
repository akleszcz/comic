import { observable, action, computed } from 'mobx';
import agent from '../agent';

export class VolumesStore {
  @observable volumesMap = [];//observable.map();
  @observable isLoading = false;

  @computed get volumes() {
    return this.volumesMap;
  };

  @action addChapter({title, position, chapterId, volumeId}) {
    const volumeIndex = this.volumesMap.findIndex(volume => volume.id === volumeId);
    const currentVolume = this.volumesMap[volumeIndex];
    let newChaptersList = currentVolume.chapters;
    newChaptersList.splice(position, 0, { title: title, id: chapterId });
    //this.volumesMap.delete(volumeId);
    this.volumesMap.splice(volumeIndex, 1, {
      id: volumeId,
      title: currentVolume.title,
      order_number: currentVolume.order_number,
      chapters: newChaptersList
    });
  }

  @action deleteChapter({chapterId, volumeId}) {
    const volumeIndex = this.volumesMap.findIndex(volume => volume.id === volumeId);
    const currentVolume = this.volumesMap[volumeIndex];
    let newChaptersList = currentVolume.chapters.filter((chapter) => {
        return chapter.id !== chapterId;
    });
    this.volumesMap.splice(volumeIndex, 1, {
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
        this.volumesMap = data;
        //this.volumesMap.clear();
        //data.forEach(volume => this.volumesMap.set(volume.id, volume));//(volume.number, volume));
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
