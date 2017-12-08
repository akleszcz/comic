import React, { Component } from 'react';
import '../css/Chapter.css';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LoadingSpinner from './LoadingSpinner';

@inject('chapterStore')
@observer
class Chapter extends Component {
  constructor(props, context) {
    super(props, context);
    this.createPageThumbnail = this.createPageThumbnail.bind(this);
  }

  componentWillMount() {
    this.initiateStore();
  }

  componentDidUpdate(prevProps) {
    //if (!(prevProps.match.params.id === this.id)) {
        this.initiateStore();
      //}
  }

  initiateStore() {
    this.props.chapterStore.loadChapter(this.id, { acceptCached: true });
  }

  get id() {
    return  this.props.match.params.id;
  }

  createPageThumbnail(thumbnail, index) {
    const pageNumber = index + 1;
    //const img = require(thumbnailUrl);
    const key = `${pageNumber}`;
    const pagePath = `/pages/${thumbnail.id}`;
    return (
      <Link key={key} className="cell" to={{  pathname: pagePath }}>
        <img src={thumbnail.url} alt={`Page ${pageNumber}`} className="page-thumbnail"/>
      </Link>
    );
  }

  render() {
    const pageThumbnails = this.props.chapterStore.currentChapter.thumbnails.map(this.createPageThumbnail);
    if (this.props.chapterStore.isLoading) {
      return (
        <div className="chapter-container"><LoadingSpinner /></div>
      );
    }
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
