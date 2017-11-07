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

  @action loadVolumes() {
    this.isLoading = true;
    agent.Volumes.all()
      .then(action(({data})  => {
        this.volumesMap.clear();
        data.forEach(volume => this.volumesMap.set(volume.number, volume));
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
