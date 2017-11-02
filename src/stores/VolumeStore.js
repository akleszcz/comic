import { observable, computed } from 'mobx';

class Page {
  @observable number;
  @observable url;

  constructor(number, url) {
    this.number = number;
    this.url = url;
  }
}

class Chapter {
  @observable number;
  @observable title;
  @observable pages = [];

  constructor(number, title, pages) {
    this.number = number;
    this.title = title;
    this.pages = pages;
  }
}

class Volume {
  @observable number;
  @observable title;
  @observable chapters = [];

  constructor(number, title, chapters) {
    this.number = number;
    this.title = title;
    this.chapters = chapters;
  }
}

class VolumeStore {
  @observable volumes = [];
  constructor(volumes) {
    this.volumes = volumes;
  }
}

export default new VolumesStore();
