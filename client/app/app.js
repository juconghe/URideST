import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Navbar from './components/navbar';
import RequestBtns from './components/requestbtns';
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
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <a href="index.html" type="button" className="btn btn-default align-left">Home</a>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

class ViewRide extends React.Component {
  render() {
    return (
      <ViewRide /> 
    );
  }
}

class PickUp extends React.Component{

}

class DropOff extends React.Component {

}

class Calendar extends React.Component {

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
    <Route path="/" component={App}>
        <IndexRoute component={Client}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/pickUp" component={PickUp}/>
        <Route path="/dropOff" component={DropOff}/>
        <Route path="/specialAccess" component={SpecialAccess}/>
        <Route path="/availableTime" component={AvailableTime}/>
        <Route path="/finished" component={Finished}/>
        <Route path="/viewRide" component={ViewRide}/>
    </Route>
  </Router>,
  document.getElementById('App')
);
