import { observable, action } from 'mobx';

export class UiStateStore {
    @observable isLoginModalOpen = false;
    @observable isMenuVisible = true;

    @action openLoginModal() {
      this.isLoginModalOpen = true;
    }

    @action closeLoginModal() {
      this.isLoginModalOpen = false;
    }

    @action toggleMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible;
    }
}

export default new UiStateStore();
