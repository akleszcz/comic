import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        Log in
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
