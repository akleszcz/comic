import React, { Component } from 'react';
import '../css/PageNumberSelect.css';
import { Link } from 'react-router-dom';

class PageNumberSelect extends Component {
  render() {
    const firstAndPreviousClass = this.props.pageNumber.toString() === "1" ? " disabled" : "";//if first page, disable first two controls
    const nextAndLastClass = this.props.pageNumber === this.props.numberOfPages ? " disabled" : "";//if last page, disable last two controls
    return (
      <div className="container">
        <Link className={"first" + firstAndPreviousClass} to={{  pathname: `/volumes/1/chapters/1/pages/1`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: 1 }}}>
        </Link>
        <Link className={"previous" + firstAndPreviousClass} to={{  pathname: `/volumes/1/chapters/1/pages/1`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: this.props.pageNumber - 1 }}}/>
        <span>
          <input type="number" min="1" max={this.props.numberOfPages} value={this.props.pageNumber}></input>/{this.props.numberOfPages}
        </span>
        <Link className={"next" + nextAndLastClass} to={{  pathname: `/volumes/1/chapters/1/pages/${this.props.pageNumber + 1}`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: this.props.pageNumber + 1 }}}/>
        <Link className={"last" + nextAndLastClass} to={{  pathname: `/volumes/1/chapters/1/pages/${this.props.numberOfPages}`,  state: { numberOfPages: this.props.numberOfPages, pageNumber: this.props.numberOfPages }}}/>
      </div>
    );
  }
}

export default PageNumberSelect;
