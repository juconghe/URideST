import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './component/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
