import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './component/Navbar';
import SelectionButtons from './component/SelectionButtons';
import PickupDate from './component/Pickupdate';
import PickupLocation from './component/PickupLocation';
import SpecialAccess from './component/SpecialAccess';
import Submitpage from './component/Submitpage';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={SelectionButtons} />
          <Route path='/pickupdate' component={PickupDate}/>
          <Route path='/pickuplocation' component={PickupLocation}/>
          <Route path='/specialaccess' component={SpecialAccess}/>
          <Route path='/submit' component={Submitpage}/>
        </div>
      </Router>
    );
  }
}

export default App;
