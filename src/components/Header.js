import React, { Component } from 'react';
import '../css/Header.css';
import { inject } from 'mobx-react';
import Delete from './icons/Delete';
import Add from './icons/Add';

@inject('uiStateStore')
class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="hamburger-menu" onClick={() => this.props.uiStateStore.toggleMenuVisibility()}></span>
        <h1>Title <Delete/><Add/></h1>
      </header>
    );
  }
}

export default Header;
