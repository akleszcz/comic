import React, { Component } from 'react';
import '../css/Page.css';
import PageNumberSelect from './PageNumberSelect';

class Page extends Component {
  render() {
    const img = require(`../img/volume1/chapter1/thumbnails/img1.png`);
    return (
      <div className="page-container">
        <img src={img} alt="Page 1"/>
        <PageNumberSelect numberOfPages={this.props.location.state.numberOfPages} pageNumber={this.props.location.state.pageNumber}/>
      </div>
    );
  }
}

export default Page;
