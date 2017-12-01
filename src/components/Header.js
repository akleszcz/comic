import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="hamburger-menu"></span>
        <h1>Title</h1>
      </header>
    );
  }
}

export default Header;
