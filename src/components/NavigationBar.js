import React, { Component } from 'react';
import '../css/NavigationBar.scss';
import { Link } from 'react-router-dom';
import SignInView from './SignInView';
import SignOutView from './SignOutView';
import { inject, observer } from 'mobx-react';

@inject('uiStateStore')
@inject('userStore')
@observer
class NavigationBar extends Component {

  render() {
    return (
      <nav className="navigation-bar">
        <ul className="navigation-list">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <SignInView/>
          </li>
          <li>
            <SignOutView/>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
