import { observable, action, computed } from 'mobx';

class VolumesStore {
  //@observable number;
  //@observable title;
  @observable volumes = observable.map();
  @observable isLoading = false;

  /*constructor(number, title, chapters) {
    this.number = number;
    this.title = title;
    this.chapters = chapters;
  }*/

  @computed get volumes() {
    return this.volumes.values();
  };

  @action loadVolumes() {
    this.isLoading = true;
    return agent.Volumes.all()
      .then(action(( { data }) => {
        this.volumes.clear();
        data.forEach(volume => this.volumes.set(volume.number, volume));
      }))
      .finally(action(() => { this.isLoading = false; }));
    }
  }

export default new VolumesStore();
