import React, { Component } from 'react';
import '../css/Page.css';
import PageNavigation from './PageNavigation';
import volumeStore from '../stores/VolumeStore';

class Page extends Component {
  get volumeNumber() {
    return this.props.match.params.volumeNumber;
  }

  get chapterNumber() {
    return  this.props.match.params.chapterNumber;
  }

  get pageNumber() {
    return  this.props.match.params.pageNumber;
  }

  render() {
    const img = require(`../img/volume${this.volumeNumber}/chapter${this.chapterNumber}/thumbnails/page${this.pageNumber}.png`);
    const numberOfPages = volumeStore.volumes
      .find(volume => volume.number.toString() === this.volumeNumber.toString())
      .chapters.find(chapter => chapter.number.toString() ===
      this.chapterNumber.toString()).numberOfPages;
    return (
      <div className="page-container">
        <img src={img} alt="Page 1"/>
        <PageNavigation numberOfPages={numberOfPages} pageNumber={this.pageNumber} chapterNumber={this.chapterNumber} volumeNumber={this.volumeNumber}/>
      </div>
    );
  }
}

export default Page;
