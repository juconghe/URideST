import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Navbar from './components/navbar';
import RequestBtns from './components/requestbtns';
import PickDate from './components/pickdate';
import Footer from './components/footer';
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

class ViewRide extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

class PickUp extends React.Component{

}

class DropOff extends React.Component {

}

class PickDate extends React.Component {

}

class AvailableTime extends React.Component {

}

class RequestDate extends React.Component {

}

class Finished extends React.Component {

}

class SpecialAccess extends React.Component {

}

class Dispatcher extends React.Component {

}

ReactDOM.render(
  <Router history={hashHistory}>
        <Route exact path="/" component={App} />
        <Route path="/pickDate" component={PickDate}/>
        <Route path="/pickUp" component={PickUp}/>
        <Route path="/dropOff" component={DropOff}/>
        <Route path="/specialAccess" component={SpecialAccess}/>
        <Route path="/availableTime" component={AvailableTime}/>
        <Route path="/finished" component={Finished}/>
        <Route path="/viewRide" component={ViewRide}/>
  </Router>,
  document.getElementById('App')
);
