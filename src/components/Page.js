import React, { Component } from 'react';
import '../css/Page.scss';
import PageNavigation from './PageNavigation';
import { inject, observer } from 'mobx-react';
import LoadingSpinner from './LoadingSpinner';

const PageImage = ({isLoading, url}) => {
  if (isLoading) {
    return (
      <LoadingSpinner />
    )
  }
  return(
    <img src={url} alt={`Page missing`}/>
  )
}

/*class PageImage extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <LoadingSpinner />
      )
    }
    return(
      <img src={this.props.url} alt={`Page missing`}/>
    )
  }
}*/

@inject('pageStore')
@observer
class Page extends Component {
  constructor(props, context) {
    super(props, context);
    this.initiateStore = this.initiateStore.bind(this);
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.initiateStore();
  }

  componentDidUpdate(prevProps) {
    if (!(prevProps.match.params.id === this.id)) {
        this.initiateStore();
      }
  }

  initiateStore() {
    this.props.pageStore.loadPage(this.id, { acceptCached: true });
  }

  render() {
    const url = this.props.pageStore.currentPage.url;
    /*if (this.props.pageStore.isLoading) {
      return (
        <div className="page-container"><LoadingSpinner /></div>
      );
    }*/
    return (
      <div className="page-container">
        <div className="image-container"><PageImage isLoading={this.props.pageStore.isLoading} url={url}/></div>
        <PageNavigation id={this.id}/>
      </div>
    );
  }
}

export default Page;
