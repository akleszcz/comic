import React, { Component } from 'react';
import '../css/NavigationBar.css';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('uiStateStore')
@observer
class NavigationBar extends Component {
  /*constructor() {
    super();

  this.openLoginModal = this.openLoginModal.bind(this);
    //this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  openLoginModal() {
    this.props.uiStateStore.openLoginModal();
  }*/

  /*closeLoginModal() {
    this.props.uiStateStore.isLoginModalOpen = true;
  }*/

  render() {
    return (
      <nav className="navigation-bar">
        <ul className="navigation-list">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
          <li onClick={() => this.props.uiStateStore.openLoginModal()}>
              Sign in
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
