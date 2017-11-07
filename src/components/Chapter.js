import React, { Component } from 'react';
import '../css/Chapter.css';
import { Link } from 'react-router-dom';
import volumeStore from '../stores/VolumeStore';

let xhr;
class Chapter extends Component {
  constructor(props, context) {
    super(props, context);
    this.createPageThumbnail = this.createPageThumbnail.bind(this);
    this.processRequest = this.processRequest.bind(this);
  }

  get volumeNumber() {
    return this.props.match.params.volumeNumber;
  }

  get chapterNumber() {
    return  this.props.match.params.chapterNumber;
  }

  createPageThumbnail(page, index) {
    const pageNumber = index + 1;
    const img = require(`../img/volume${this.volumeNumber}/chapter${this.chapterNumber}/thumbnails/${page.fileName}`);
    const key = `${this.volumeNumber}-${this.chapterNumber}-${pageNumber}`;
    return (
      <Link className="cell" to={{  pathname: `/volumes/${this.volumeNumber}/chapters/${this.chapterNumber}/pages/${pageNumber}`,  state: { pageNumber: pageNumber }}}>
        <img key = {key} src={img} alt={`Page ${pageNumber}`} className="page-thumbnail"/>
      </Link>
    );
  }

  componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', "http://localhost:3001/api/volumes", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
            //var response = JSON.parse(xhr.responseText);
        }
    }

  render() {
    const chapterDetails = volumeStore.volumes
      .find(volume => volume.number.toString() === this.volumeNumber.toString())
      .chapters.find(chapter => chapter.number.toString() ===
      this.chapterNumber.toString());
    const pages = chapterDetails.pages;
    const pageThumbnails = pages.map(this.createPageThumbnail);
    return (
      <div className="chapter-container">
        <div className="pages-grid">
            {pageThumbnails}
        </div>
      </div>
    );
  }
}

export default Chapter;
