import React, { Component } from 'react';
import '../css/Page.css';
import PageNavigation from './PageNavigation';
import { inject, observer } from 'mobx-react';

@inject('pageStore')
@observer
class Page extends Component {
  constructor(props, context) {
    super(props, context);
    this.initiateStore = this.initiateStore.bind(this);
  }

  get volumeNumber() {
    return this.props.match.params.volumeNumber;
  }

  get chapterNumber() {
    return  this.props.match.params.chapterNumber;
  }

  get pageNumber() {
    return  this.props.match.params.pageNumber;
  }

  componentWillMount() {
    this.initiateStore();
  }

  componentDidUpdate(prevProps) {
    if (!(prevProps.match.params.volumeNumber === this.volumeNumber &&
      prevProps.match.params.chapterNumber === this.chapterNumber &&
      prevProps.match.params.pageNumber === this.pageNumber)) {
        this.initiateStore();
      }
  }

  initiateStore() {
    this.props.pageStore.setVolumeNumber(this.volumeNumber);
    this.props.pageStore.setChapterNumber(this.chapterNumber);
    this.props.pageStore.setPageNumber(this.pageNumber);
    this.props.pageStore.loadPage();
  }

  render() {
    const url = this.props.pageStore.url;
    const numberOfPages = this.props.pageStore.numberOfPages;
    return (
      <div className="page-container">
        <img src={url} alt={`Page ${this.pageNumber}`}/>
        <PageNavigation numberOfPages={numberOfPages} pageNumber={this.pageNumber} chapterNumber={this.chapterNumber} volumeNumber={this.volumeNumber}/>
      </div>
    );
  }
}

export default Page;
