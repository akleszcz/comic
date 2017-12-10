import React, { Component } from 'react';
import '../css/MainSection.scss';
import { Route } from 'react-router-dom'
import Chapter from './Chapter';
import Page from './Page';

class MainSection extends Component {

  render() {
    //const numberOfChaptersPages = this.props.location.state.numberOfPages;
    //const {numberOfChaptersPages } = this.props.location.state;
    return (
      <main className="main-section">
        <Route exact path="/" render = {() => (
          <p>Welcome</p>
        )}/>
        <Route path="/chapters/:id" component = { Chapter }/>
        <Route path="/pages/:id" component = { Page }/>
        {/*<Route exact path="/volumes/:volumeNumber/chapters/:chapterNumber" component = { Chapter }/>/*}
        {/*<Route exact path="/volumes/:volumeNumber/chapters/:chapterNumber/pages/" component = { Page }/>*/}
        {/*<Route path="/volumes/:volumeNumber/chapters/:chapterNumber/pages/:pageNumber" component = { Page }/>*/}
      </main>
    );
  }
}

export default MainSection;
