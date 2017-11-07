import React, { Component } from 'react';
import '../css/Chapter.css';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('chapterStore')
@observer
class Chapter extends Component {
  constructor(props, context) {
    super(props, context);
    this.createPageThumbnail = this.createPageThumbnail.bind(this);
  }

  componentDidMount() {
    this.props.chapterStore.setVolumeNumber(this.volumeNumber);
    this.props.chapterStore.setChapterNumber(this.chapterNumber);
    this.props.chapterStore.loadThumbnails();
  }

  get volumeNumber() {
    return this.props.match.params.volumeNumber;
  }

  get chapterNumber() {
    return  this.props.match.params.chapterNumber;
  }

  createPageThumbnail(thumbnailUrl, index) {
    const pageNumber = index + 1;
    //const img = require(thumbnailUrl);
    const key = `${this.volumeNumber}-${this.chapterNumber}-${pageNumber}`;
    const pagePath = `/volumes/${this.volumeNumber}/chapters/${this.chapterNumber}/pages/${pageNumber}`;
    return (
      <Link className="cell" to={{  pathname: pagePath }}>
        <img key={key} src={thumbnailUrl} alt={`Page ${pageNumber}`} className="page-thumbnail"/>
      </Link>
    );
  }

  render() {
    const pageThumbnails = this.props.chapterStore.thumbnails.map(this.createPageThumbnail);;
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
