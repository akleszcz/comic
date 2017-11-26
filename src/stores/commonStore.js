import { observable, action, reaction } from 'mobx';

class CommonStore {

  @observable appName = 'Conduit';
  @observable token = window.localStorage.getItem('jwt');

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
      }
    );
  }

  @action setToken(token) {
    this.token = token;
  }

}

export default new CommonStore();
