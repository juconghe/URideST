import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './component/Navbar';
import SelectionButtons from './component/SelectionButtons';
import Footer from './component/Footer';
import PickupDate from './component/Pickupdate';
import PickupLocation from './component/PickupLocation';
import SpecialAccess from './component/SpecialAccess';
import Submitpage from './component/Submitpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Submitpage />
        <Footer />
      </div>
    );
  }
}

export default App;
