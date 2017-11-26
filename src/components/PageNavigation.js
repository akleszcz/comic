import React, { Component } from 'react';
import '../css/PageNumberSelect.css';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


@inject('pageStore')
@observer
class PageNavigation extends Component {

  get backwardMoveEnabled() {
    return !(parseInt(this.props.pageStore.currentPage.number, 10) === parseInt(this.props.pageStore.currentPage.numberOfPages, 10));
  }

  get forwardMoveEnabled() {
    return !(parseInt(this.props.pageStore.currentPage.number, 10) === 1);
  }

  get _basePath() {
    return `/pages`;
  }

  render() {
    let {id, numberOfPages, number, chapterId, previousPageId, nextPageId, firstPageId, lastPageId} = this.props.pageStore.currentPage;
    //const {isLoading} = this.props.pageStore;
    const firstAndPreviousClass = this.forwardMoveEnabled ? "" : " disabled";//if first page, disable first two controls
    const nextAndLastClass = this.backwardMoveEnabled ? "" : " disabled";//if last page, disable last two controls
    if (previousPageId === null) {
      previousPageId = id;
    }
    if (nextPageId === null) {
      nextPageId = id;
    }
    return (
      <div className="container">
        <Link className={"first" + firstAndPreviousClass} to={{  pathname: `${this._basePath}/${firstPageId}`}}>
        </Link>
        <Link className={"previous" + firstAndPreviousClass} to={{  pathname: `${this._basePath}/${previousPageId}`}}/>
        <span>
          <input type="number" min="1" max={numberOfPages} value={number} readOnly></input>/{numberOfPages}
        </span>
        <Link className={"next" + nextAndLastClass} to= {`${this._basePath}/${nextPageId}`}/>
        <Link className={"last" + nextAndLastClass} to={`${this._basePath}/${lastPageId}`}/>
        <Link to={`/chapters/${chapterId}`}>Go Back to all pages</Link>
      </div>
    );
  }
}

export default PageNavigation;
