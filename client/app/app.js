import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Navbar from './components/navbar';
import RequestBtns from './components/requestbtns';
import PickDate from './components/pickdate';
import Footer from './components/footer';
import ViewRide from './components/viewRide';
import PickUp from './components/pickup';
import DropOff from './components/dropoff';
import Finished from './components/finished';
import AvaliableTime from './components/availableTime';
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component{
  render() {
    return (
      <Client />
    );
  }
}

class Client extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <RequestBtns />
        <Footer />
      </div>
    );
  }
}

class ViewRidePage extends React.Component {
  render() {
    return (
      <ViewRide />
    );
  }
}

class PickUpPage extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <PickUp />
        <Footer />
      </div>
    );
  }
}

class DropOffPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <DropOff />
        <Footer />
      </div>
    );
  }
}

class AvaliableTimePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <AvailableTime />
        <Footer />
      </div>
    );
  }
}

class RequestDate extends React.Component {

}

class FinishedPage extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <Finished />
        <Footer />
      </div>
    );
  }

}

class SpecialAccess extends React.Component {

}

class Dispatcher extends React.Component {

}

ReactDOM.render(
  <Router history={hashHistory}>
        <Route exact path="/" component={App} />
        <Route path="/requestDate" component={RequestDate}/>
        <Route path="/dropOff" component={DropOff}/>
        <Route path="/pickUp" component={PickUp}/>
        <Route path="/specialAccess" component={SpecialAccess}/>
        <Route path="/availableTime" component={AvailableTime}/>
        <Route path="/finished" component={Finished}/>
        <Route path="/viewRide" component={ViewRidePage}/>
  </Router>,
  document.getElementById('App')
);
