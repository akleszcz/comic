import React, { Component } from 'react';
import '../css/PageNumberSelect.css';
import { Link } from 'react-router-dom';

class PageNavigation extends Component {
  get backwardMoveEnabled() {
    return !(parseInt(this.props.pageNumber, 10) === parseInt(this.props.numberOfPages, 10));
  }

  get forwardMoveEnabled() {
    return !(parseInt(this.props.pageNumber, 10) === 1);
  }

  render() {
    const firstAndPreviousClass = this.forwardMoveEnabled ? "" : " disabled";//if first page, disable first two controls
    const nextAndLastClass = this.backwardMoveEnabled ? "" : " disabled";//if last page, disable last two controls
    const previousPageNumber = Math.max(parseInt(this.props.pageNumber, 10) - 1, 1);
    const nextPageNumber = Math.min(parseInt(this.props.pageNumber, 10) + 1, this.props.numberOfPages);
    const basePath = `/volumes/${this.props.volumeNumber}/chapters/${this.props.chapterNumber}/pages`;
    return (
      <div className="container">
        <Link className={"first" + firstAndPreviousClass} to={{  pathname: `${basePath}/1`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: 1 }}}>
        </Link>
        <Link className={"previous" + firstAndPreviousClass} to={{  pathname: `${basePath}/${previousPageNumber}`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: previousPageNumber }}}/>
        <span>
          <input type="number" min="1" max={this.props.numberOfPages} value={this.props.pageNumber}></input>/{this.props.numberOfPages}
        </span>
        <Link className={"next" + nextAndLastClass} to={{  pathname: `${basePath}/${nextPageNumber}`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: nextPageNumber }}}/>
        <Link className={"last" + nextAndLastClass} to={{  pathname: `${basePath}/${this.props.numberOfPages}`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: this.props.numberOfPages }}}/>
      </div>
    );
  }
}

export default PageNavigation;
