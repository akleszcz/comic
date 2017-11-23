import { observable, action } from 'mobx';

class UiStateStore {
    @observable isLoginModalOpen = false;

    @action openLoginModal() {
      this.isLoginModalOpen = true;
    }

    @action closeLoginModal() {
      this.isLoginModalOpen = false;
    }
}

export default new UiStateStore();
