import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './component/Navbar';
import SelectionButtons from './component/SelectionButtons';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SelectionButtons />
        <Footer />
      </div>
    );
  }
}

export default App;
