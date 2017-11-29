import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('uiStateStore')
@inject('userStore')
@observer
class SignInView extends Component {
  render() {
    if (!this.props.userStore.currentUser.login) {
      return (
        <span onClick={() => this.props.uiStateStore.openLoginModal()}>
            Sign in
        </span>
      );
    }

    return null;
  }
}

export default SignInView;
