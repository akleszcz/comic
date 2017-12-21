import { observable, action } from 'mobx';
import agent from '../agent';

export class UserStore {
  @observable currentUser = { login: undefined, admin: false };
  @observable loadingUser = false;

  @action setUser() {
    this.loadingUser = true;
    return agent.User.byToken()
      .then(action(({ login, admin }) => { this.currentUser = { login, admin }; }))
      .then(action(() => { this.loadingUser = false; }));
  }

  @action forgetUser() {
    this.currentUser = { login: undefined, admin: false };
  }

}

export default new UserStore();
