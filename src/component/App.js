import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import SelectionButtons from './SelectionButtons';
import PickupDate from './Pickupdate';
import PickupLocation from './PickupLocation';
import SpecialAccess from './SpecialAccess';
import Submitpage from './Submitpage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux'
import URideST from '../reducers'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = createStore(URideST, applyMiddleware(logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
