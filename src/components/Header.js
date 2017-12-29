import React, { Component } from 'react';
import '../css/Header.scss';
import { inject } from 'mobx-react';

@inject('uiStateStore')
class Header extends Component {
  render() {
    return (
      <header className="header">
        <button className="hamburger-menu icon-button" onClick={() => this.props.uiStateStore.toggleMenuVisibility()}></button>
        <h1>Title</h1>
      </header>
    );
  }
}

export default Header;
