import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from './stores/commonStore';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://comic-rest.azurewebsites.net/api';//'http://localhost:3000/api';//
const responseBody = res => res.body;

const handleErrors = err => {
  if (err) {
    console.error(err);
  }
  return err;
};

const tokenPlugin = req => {
  if (commonStore.token) {
    req.set('token', `${commonStore.token}`);
  }
};

const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .end(handleErrors)
      .then(responseBody),
  getByToken: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      //.use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody)
};

const Volumes = {
  all: () =>
    requests.get(`/volumes`),
  byId: id =>
    requests.get(`/volumes/${id}`)
};

const Chapters = {
  byId: id =>
    requests.get(`/chapters/${id}`)
};

const Pages = {
  byId: id =>
    requests.get(`/pages/${id}`)
};

const User = {
  login: (login, password) =>
    requests.post(`/users/login`, { login, password }),
  byToken: () =>
    requests.getByToken('/user')
};

export default {
  Volumes,
  Chapters,
  Pages,
  User
};
