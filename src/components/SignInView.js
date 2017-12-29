import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('uiStateStore')
@inject('userStore')
@observer
class SignInView extends Component {
  render() {
    if (!this.props.userStore.currentUser.login) {
      return (
        <button className="icon-button" onClick={() => this.props.uiStateStore.openLoginModal()}>
            Sign in
        </button>
      );
    }

    return null;
  }
}

export default SignInView;
