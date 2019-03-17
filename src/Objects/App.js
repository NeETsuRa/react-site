import React, { Component } from 'react';
import Headder from './Headder';
import Footer from './Footer';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Headder/>
      <Menu/>
      <Footer/>
      </div>
    );
  }
}

export default App;
