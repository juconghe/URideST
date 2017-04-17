const Navbar = require('./components/navbar');
const Footer = require('./components/footer');
const ViewRide = require('./components/viewRide');
const Container = require('./components/container');
const React = require('react');
const ReactDOM = require('react-dom');
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;

class App extends React.Component{
  render() {
    return (
      <Container currentPage="Home"/>
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


ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/viewRide" component={ViewRidePage}/>
    </div>
  </BrowserRouter>,
  document.getElementById('App')
);
