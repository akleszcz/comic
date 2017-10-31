import React, { Component } from 'react';
import '../css/MainSection.css';
import { Route } from 'react-router-dom'
import Chapter from './Chapter';

class MainSection extends Component {

  render() {
    //const numberOfChaptersPages = this.props.location.state.numberOfPages;
    //const {numberOfChaptersPages } = this.props.location.state;
    return (
      <section className="main-section">
        <Route exact path="/" render = {() => (
          <h1>Welcome</h1>
        )}/>
        <Route path="/volumes/:volumeNumber/chapters/:chapterNumber" component = { Chapter }/>
      </section>
    );
  }
}

export default MainSection;
