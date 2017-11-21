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
    this.props.pageStore.setId(this.id);
    this.props.pageStore.loadPage();
  }

  render() {
    const url = this.props.pageStore.url;
    //const {number, previousPageId, nextPageId, numberOfPages, firstPageId, lastPageId} = this.props.pageStore;
    return (
      <div className="page-container">
        <img src={url} alt={`Page missing`}/>
        <PageNavigation/>
      </div>
    );
  }
}

export default Page;
