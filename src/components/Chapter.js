import React, { Component } from 'react';

class Chapter extends Component {
  constructor(props, context) {
    super(props, context);
    this.importAll = this.importAll.bind(this);
    this.createPageThumbnail = this.createPageThumbnail.bind(this);
  }

  createPageThumbnail(url) {
    const pageNumber = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.')).substring(3); //img1.png -> 1, img2.png -> 2 etc.
    const key = `${this.props.match.params.volumeNumber}-${this.props.match.params.chapterNumber}-${pageNumber}`;
    return <img key = {key} src={url} alt={`Page ${pageNumber}`}/>
  }

  importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  render() {
    const volumeNumber = this.props.match.params.volumeNumber;
    const chapterNumber = this.props.match.params.chapterNumber;
    const imgDirectory = `volume1/chapter1/thumbnails`;// `../img/volume${volumeNumber}/chapter${chapterNumber}/thumbnails`;
    const images = this.importAll(require.context("../img/" + {imgDirectory}, false, /.png/));
    const pageThumbnails = Object.keys(images).map(this.createPageThumbnail);
    //this.importAll(require.context(`../img/volume${this.props.match.params.volumeNumber}/chapter${this.props.match.params.chapterNumber}/thumbnails`, false, '/.png')).map(this.createPageThumbnail);
    return (
      <div>
        <p>
          Volume {volumeNumber}, Chapter {chapterNumber}
        </p>
        <ul>
          {pageThumbnails}
        </ul>
      </div>
    );
  }
}

export default Chapter;
