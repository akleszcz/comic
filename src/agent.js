import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:3001/api';
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
  byNumber: (number) =>
    requests.get(`/volumes/${number}`)
};

const Chapters = {
  byNumber: (volumeNumber, number) =>
    requests.get(`/volumes/${volumeNumber}/chapters/${number}`),
  forVolume: (volumeNumber) =>
    requests.get(`/volumes/${volumeNumber}/chapters`)
};

const Pages = {
  byNumber: (volumeNumber, chapterNumber, number) =>
    requests.get(`/volumes/${volumeNumber}/chapters/${chapterNumber}/pages/${number}`)
};

export default {
  Volumes,
  Chapters,
  Pages
};
