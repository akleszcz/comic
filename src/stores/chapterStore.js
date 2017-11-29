import { observable, action, computed } from 'mobx';
import agent from '../agent';
import volumesStore from './volumesStore';

class ChapterStore {
  @observable isLoading = false;
  @observable currentChapter = { id: '', thumbnails: [] };

  @computed get numberOfPages() {
    return this.currentChapter.thumbnails.length;
  }

  @computed get firstPageId() {
    if (this.currentChapter.thumbnails[0]) {
      return this.currentChapter.thumbnails[0].id;
    }
    return null;
  }

  @computed get lastPageId() {
    if (this.currentChapter.thumbnails[this.currentChapter.thumbnails.length - 1]) {
      return this.currentChapter.thumbnails[this.currentChapter.thumbnails.length - 1].id;
    }
    return null;
  }

  numberOfPage(id) {
    if (id) {
      return this.currentChapter.thumbnails.indexOf(this.currentChapter.thumbnails.find(p => p.id === id)) + 1;
    }
    return 0;
  }

  @action loadChapter(id, { acceptCached = false } = {}) {
    if (!id) {
      return Promise.resolve(this.currentChapter);
    }
    if (acceptCached && this.currentChapter && id === this.currentChapter.id) {
      return Promise.resolve(this.currentChapter);
    }
    this.isLoading = true;
    return agent.Chapters.byId(id)
      .then(action((chapter) => {
        this.currentChapter = chapter;
      }))
      .then(action(() => { this.isLoading = false; }));
    }

    @action createChapter(title, position, volumeId) {
      return agent.Chapters.create(title, position, volumeId)
        .then(({ chapter }) => {
          volumesStore.addChapter({title: chapter.title, position: chapter.position, chapterId: chapter.id, volumeId: chapter.volume_id})
        })
    }
  }

export default new ChapterStore();
