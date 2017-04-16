import {IndexRoute, Router, Route, hashHistory, Link} from 'react-router';
import Navbar from './components/navbar';
import RequestBtns from './components/requestbtns';
import PickDate from './components/pickdate';
import Footer from './components/footer';
import ViewRide from './components/viewRide';
import PickUp from './components/pickup';
import DropOff from './components/dropoff';
import Finished from './components/finished';
import SpecialAccess from './components/SpecialAccess';
// import AvaliableTime from './components/availableTime';
import AvaliableTime from './components/avaliableTime';

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
      <div>
      <Navbar />
      <ViewRide />
      <Footer />
      </div>
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
        <Footer />
      </div>
    );
  }
}

class RequestDatePage extends React.Component {
  render() {
    return (
      <PickDate />
    );
  }
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

class SpecialAccessPage extends React.Component {
  render() {
    return (
      <SpecialAccess />
    );
  }
}

class Dispatcher extends React.Component {

}

ReactDOM.render(
  <Router history={hashHistory}>
        <Route exact path="/" component={App} />
        <Route path="/requestDate" component={RequestDatePage}/>
        <Route path="/dropOff" component={DropOffPage}/>
        <Route path="/pickUp" component={PickUpPage}/>
        <Route path="/specialAccess" component={SpecialAccessPage}/>
        <Route path="/availableTime" component={AvaliableTimePage}/>
        <Route path="/finished" component={Finished}/>
        <Route path="/viewRide" component={ViewRidePage}/>
  </Router>,
  document.getElementById('App')
);
