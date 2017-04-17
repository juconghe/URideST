const Navbar = require('./components/navbar');
const RequestBtns = require('./components/requestbtns');
const PickDate = require('./components/pickdate');
const Footer = require('./components/footer');
const ViewRide = require('./components/viewRide');
const PickUp = require('./components/pickup');
const DropOff = require('./components/dropoff');
const Finished = require('./components/finished');
const SpecialAccess = require('./components/SpecialAccess');
const AvaliableTime = require('./components/avaliableTime');
const React = require('react');
const ReactDOM = require('react-dom');
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;

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
  <BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/requestDate" component={RequestDatePage}/>
        <Route path="/dropOff" component={DropOffPage}/>
        <Route path="/pickUp" component={PickUpPage}/>
        <Route path="/specialAccess" component={SpecialAccessPage}/>
        <Route path="/availableTime" component={AvaliableTimePage}/>
        <Route path="/finished" component={FinishedPage}/>
        <Route path="/viewRide" component={ViewRidePage}/>
    </div>
  </BrowserRouter>,
  document.getElementById('App')
);
