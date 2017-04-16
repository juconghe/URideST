import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Navbar from './components/navbar';
import RequestBtns from './components/requestbtns';
import PickDate from './components/pickdate';
import Footer from './components/footer';
import ViewRide from './components/ViewRide'
import SpecialAccess from './components/SpecialAccess'
// import PickUp from './components/pickup.js';
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
      </div>
    );
  }
}

// class PickUpPage extends React.Component{
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <PickUp />
//         <Footer />
//       </div>
//     );
//   }
// }

class DropOff extends React.Component {

}

class AvailableTime extends React.Component {

}

class RequestDatePage extends React.Component {
  render() {
    return (
      <PickDate />
    );
  }
}

class Finished extends React.Component {

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
        <Route path="/dropOff" component={DropOff}/>
        <Route path="/specialAccess" component={SpecialAccess}/>
        <Route path="/availableTime" component={AvailableTime}/>
        <Route path="/finished" component={Finished}/>
        <Route path="/viewRide" component={ViewRidePage}/>
  </Router>,
  document.getElementById('App')
);
