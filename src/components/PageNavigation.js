import React, { Component } from 'react';
import '../css/PageNumberSelect.css';
import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router';


class PageNavigation extends Component {
  /*constructor(props, context) {
      super(props, context);
      this.changePage = this.changePage.bind(this);
  }*/

  get backwardMoveEnabled() {
    return !(parseInt(this.props.pageNumber, 10) === parseInt(this.props.numberOfPages, 10));
  }

  get forwardMoveEnabled() {
    return !(parseInt(this.props.pageNumber, 10) === 1);
  }

  get _basePath() {
    return `/pages`;
  }

  /*changePage(event) {
    if (event.target.value !== '') this.props.history.push(`${this._basePath}/${event.target.value}`);
  }*/

  render() {
    const firstAndPreviousClass = this.forwardMoveEnabled ? "" : " disabled";//if first page, disable first two controls
    const nextAndLastClass = this.backwardMoveEnabled ? "" : " disabled";//if last page, disable last two controls
    //const previousPageNumber = Math.max(parseInt(this.props.pageNumber, 10) - 1, 1);
    //const nextPageNumber = Math.min(parseInt(this.props.pageNumber, 10) + 1, this.props.numberOfPages);
    return (
      <div className="container">
        <Link className={"first" + firstAndPreviousClass} to={{  pathname: `${this._basePath}/${this.props.firstPageId}`,  state: { numberOfPages: this.props.numberOfPages, id: this.props.firstPageId }}}>
        </Link>
        <Link className={"previous" + firstAndPreviousClass} to={{  pathname: `${this._basePath}/${this.props.previousPageId}`,  state: { numberOfPages: this.props.numberOfPages, id: this.props.previousPageId }}}/>
        <span>
          <input type="number" min="1" max={this.props.numberOfPages} value={this.props.pageNumber} readOnly></input>/{this.props.numberOfPages}
        </span>
        <Link className={"next" + nextAndLastClass} to={{  pathname: `${this._basePath}/${this.props.nextPageId}`,
        state: { numberOfPages: this.props.numberOfPages, id: this.props.nextPageId }}}/>
        <Link className={"last" + nextAndLastClass} to={{  pathname: `${this._basePath}/${this.props.numberOfPages}`,
        state: { numberOfPages: this.props.numberOfPages, id: this.props.lastPageId }}}/>
      </div>
    );
  }
}

export default PageNavigation;//withRouter(PageNavigation);
