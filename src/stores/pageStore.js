import { observable, action } from 'mobx';
import agent from '../agent';

class PageStore {
  @observable url;
  @observable id;
  @observable number;
  @observable previousPageId;
  @observable nextPageId;
  @observable firstPageId;
  @observable lastPageId;
  @observable numberOfPages;

  @action setId(id) {
    this.id = id;
  }

  @action loadPage() {
    this.isLoading = true;
    agent.Pages.byId(this.id)
    .then(action(({url, number, number_of_pages, previous_page_id, next_page_id, first_page_id, last_page_id}) => {
      this.url = url;
      this.number = number;
      this.numberOfPages = number_of_pages;
      this.previousPageId = previous_page_id;
      this.nextPageId = next_page_id;
      this.firstPageId = first_page_id;
      this.lastPageId = last_page_id;
    }))
    .then(action(() => { this.isLoading = false; }));
  }
}

export default new PageStore();
