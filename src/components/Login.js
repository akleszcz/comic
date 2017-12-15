import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Login.scss';
import Close from './icons/Close';

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
        <form className="login-form" onSubmit={this.handleSubmitForm}>
          <Close className="close" onClick={() => this.props.uiStateStore.closeLoginModal()}/>
          <Input type="login" placeholder="Login" onChange={this.handleLoginChange}/>
          <Input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          <Button>Sign in</Button>
        </form>
      </div>
    );
  }
}

export default Login;
