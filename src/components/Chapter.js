import React, { Component } from 'react';
import '../css/Chapter.css';
import { Link } from 'react-router-dom';

class Chapter extends Component {
  constructor(props, context) {
    super(props, context);
    this.createPageThumbnail = this.createPageThumbnail.bind(this);
  }

  createPageThumbnail(filename) {
    const img = require(`../img/volume${this.props.match.params.volumeNumber}/chapter${this.props.match.params.chapterNumber}/thumbnails/${filename}`);
    const pageNumber = filename.substring(3, filename.lastIndexOf('.')); //img1.png -> 1, img2.png -> 2 etc.
    const key = `${this.props.match.params.volumeNumber}-${this.props.match.params.chapterNumber}-${pageNumber}`;
    return (
      <Link className="cell" to={{  pathname: `/volumes/${this.props.match.params.volumeNumber}/chapters/${this.props.match.params.chapterNumber}/pages/${pageNumber}`,  state: { numberOfPages: this.props.location.state.numberOfPages, pageNumber: pageNumber }}}>
        <img key = {key} src={img} alt={`Page ${pageNumber}`} className="page-thumbnail"/>
      </Link>
    );
  }

  /*importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }*/

  render() {
    //const imgDirectory = `../img/volume1/chapter1/thumbnails`;// `../img/volume${volumeNumber}/chapter${chapterNumber}/thumbnails`;
    let pageThumbnails = [];
    const { numberOfPages } = this.props.location.state;//this.props.numberOfPages;
    for (let i = 1; i < numberOfPages; i++) {
      //const url = `../img/volume1/chapter1/thumbnails/img${i}.png`;
      const filename = `img${i}.png`;
      pageThumbnails.push(this.createPageThumbnail(filename));
    }

    //const images = this.importAll(require.context("../img/" + {imgDirectory}, false, /.png/));
    //const pageThumbnails = Object.keys(images).map(this.createPageThumbnail);
    //this.importAll(require.context(`../img/volume${this.props.match.params.volumeNumber}/chapter${this.props.match.params.chapterNumber}/thumbnails`, false, '/.png')).map(this.createPageThumbnail);
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
