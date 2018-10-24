import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './component/Navbar';
import SelectionButtons from './component/SelectionButtons'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SelectionButtons />
      </div>
    );
  }
}

export default App;
