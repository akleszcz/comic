import { observable, action } from 'mobx';

class UserStore {
  @observable currentUser = { login: undefined, admin: false };

  @action setUser(login, admin) {
    this.currentUser = { login, admin };
  }

  @action forgetUser() {
    this.currentUser = { login: undefined, admin: false };
  }

  }

export default new UserStore();
