import React, { Component } from 'react';
import '../css/Header.css';
import { inject } from 'mobx-react';
import FaBeer from './FaBeer';

@inject('uiStateStore')
class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="hamburger-menu" onClick={() => this.props.uiStateStore.toggleMenuVisibility()}></span>
        <h1>Title <FaBeer/></h1>
      </header>
    );
  }
}

export default Header;
