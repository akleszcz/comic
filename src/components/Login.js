import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('authenticationStore')
@inject('uiStateStore')
@observer
class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  componentWillUnmount() {
    this.props.authenticationStore.reset();
  }

  handleLoginChange(e) {
    this.props.authenticationStore.setLogin(e.target.value);
  }

  handlePasswordChange(e) {
    this.props.authenticationStore.setPassword(e.target.value);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.props.authenticationStore.login()
      .then(() => this.props.uiStateStore.closeLoginModal());
  };

  render() {
    return (
      <div className="login">
        Log in
        <form onSubmit={this.handleSubmitForm}>
          <input type="login" placeholder="Login" onChange={this.handleLoginChange}/>
          <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
