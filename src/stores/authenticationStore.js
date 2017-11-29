import { observable, action } from 'mobx';
import agent from '../agent';
import commonStore from './commonStore';
import userStore from './userStore';

class AuthenticationStore {
  @observable inProgress = false;
  @observable errors = undefined;

  @observable values = {
    login: '',
    password: '',
  };

  @action setLogin(login) {
    this.values.login = login;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action reset() {
    this.values.login = '';
    this.values.password = '';
  }

  @action login() {
    this.inProgress = true;
    this.errors = undefined;
    return agent.User.login(this.values.login, this.values.password)
      .then(({ token }) => {
        commonStore.setToken(token);
      })
      .then(() => userStore.setUser())
      .then(action(() => { this.inProgress = false; }))
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }));
  }

  @action logout() {
    commonStore.setToken(undefined);
    userStore.forgetUser();
  }
}

export default new AuthenticationStore();
