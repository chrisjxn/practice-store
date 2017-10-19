import React, { Component } from 'react';
import './App.css';
import Header from './pageComponents/Header/Header';
import Main from './pageComponents/Main/Main';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
