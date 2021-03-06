import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import NavigationBar from './NavigationBar';
import MainSection from './MainSection';
import Login from './Login';
import Modal from 'react-modal';
import '../css/App.scss';
import { inject, observer } from 'mobx-react';

@inject('uiStateStore')
@inject('commonStore')
@inject('userStore')
@observer
class App extends Component {

  componentDidMount() {
    if (this.props.commonStore.token) {
      this.props.userStore.setUser();
      }
    }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.uiStateStore.isLoginModalOpen}
          contentLabel="Login Modal">
            <Login/>
        </Modal>
        <div className="app">
          <NavigationBar/>
          <Header/>
          <Menu/>
          <MainSection/>
        </div>
      </div>
    );
  }
}

export default App;
