import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://comic-rest.azurewebsites.net/api';//'http://localhost:3001/api';
const responseBody = res => res.body;

const handleErrors = err => {
  if (err) {
    console.error(err);
  }
  return err;
};

const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
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

export default {
  Volumes,
  Chapters,
  Pages
};
