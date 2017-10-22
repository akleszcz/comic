import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import MainSection from './MainSection';
import '../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <Header/>
        <Menu/>
        <MainSection/>
      </div>
      </Router>
    );
  }
}

export default App;
