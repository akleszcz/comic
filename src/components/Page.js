import React, { Component } from 'react';
import '../css/Page.css';
import PageNavigation from './PageNavigation';
import { inject, observer } from 'mobx-react';

@inject('pageStore')
@inject('chapterStore')
@observer
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

  componentDidMount() {
    this.props.pageStore.setVolumeNumber(this.volumeNumber);
    this.props.pageStore.setChapterNumber(this.chapterNumber);
    this.props.pageStore.setPageNumber(this.pageNumber);
    this.props.pageStore.loadPage();
  }

  render() {
    const filename = this.props.pageStore.filename;
    const numberOfPages = this.props.chapterStore.numberOfPages;
    return (
      <div className="page-container">
        <img src={filename} alt="Page 1"/>
        <PageNavigation numberOfPages={numberOfPages} pageNumber={this.pageNumber} chapterNumber={this.chapterNumber} volumeNumber={this.volumeNumber}/>
      </div>
    );
  }
}

export default Page;
