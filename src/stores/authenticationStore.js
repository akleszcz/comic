import { observable, action } from 'mobx';
import agent from '../agent';
import commonStore from './commonStore';
import userStore from './userStore';

class AuthenticationStore {
  @observable inProgress = false;
  @observable error = undefined;

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
    this.error = undefined;
    return agent.User.login(this.values.login, this.values.password)
      .then(({ token }) => commonStore.setToken(token))
      .then(() => userStore.setUser())
      .catch(action((err) => {
        this.error = err.response && err.response.body && err.response.body.message;
        ///throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

  @action logout() {
    commonStore.setToken(undefined);
    userStore.forgetUser();
  }
}

export default new AuthenticationStore();
