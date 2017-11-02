import { observable, computed } from 'mobx';

class Page {
  @observable fileName;

  constructor(fileName) {
    this.fileName = fileName;
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

  @computed get numberOfPages() {
    return this.pages.length;
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

export default new VolumeStore([new Volume(1, "First Volume", [
  new Chapter(1, "First Chapter", [
    new Page("page1.png"),
    new Page("page2.png"),
    new Page("page3.png"),
    new Page("page4.png"),
    new Page("page5.png")
  ]),
  new Chapter(2, "Second Chapter", [
    new Page("page1.png"),
    new Page("page2.png"),
    new Page("page3.png"),
    new Page("page4.png")
  ])
]),
new Volume(2, "Second Volume", [
  new Chapter(1, "First Chapter", [
    new Page("page1.png"),
    new Page("page2.png"),
    new Page("page3.png"),
    new Page("page4.png"),
    new Page("page5.png")
  ]),
  new Chapter(2, "Second Chapter", [
    new Page("page1.png"),
    new Page("page2.png"),
    new Page("page3.png"),
    new Page("page4.png")
  ]),
  new Chapter(3, "Third Chapter", [
    new Page("page1.png"),
    new Page("page2.png"),
    new Page("page3.png")
  ])
])
]);
