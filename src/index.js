import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/reset.css';
import { BrowserRouter, Route } from 'react-router-dom';
import volumesStore from './stores/volumesStore';
import chapterStore from './stores/chapterStore';
import pageStore from './stores/pageStore';
import uiStateStore from './stores/uiStateStore';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

useStrict(true);

const stores = {
  volumesStore,
  chapterStore,
  pageStore,
  uiStateStore
};

ReactDOM.render(
  <Provider {...stores}>
      <BrowserRouter>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
