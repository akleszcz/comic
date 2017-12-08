import React, { Component } from 'react';
import '../css/Header.scss';
import { inject } from 'mobx-react';

@inject('uiStateStore')
class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="hamburger-menu" onClick={() => this.props.uiStateStore.toggleMenuVisibility()}></span>
        <h1>Title</h1>
      </header>
    );
  }
}

export default Header;
