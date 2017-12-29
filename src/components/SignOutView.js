import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@inject('authenticationStore')
@observer
class SignOutView extends Component {
  constructor(props, context) {
    super(props, context);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.authenticationStore.logout();
  }

  render() {
    if (this.props.userStore.currentUser.login) {
      return (
        <button className="icon-button" onClick={this.signOut}>
            Sign out
        </button>
      );
    }
    return null;
  }
}

export default SignOutView;
