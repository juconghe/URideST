const Navbar = require('./components/navbar');
const ViewRide = require('./components/viewRide');
const Container = require('./components/container');
const React = require('react');
const ReactDOM = require('react-dom');
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;

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
        <footer className="footer">
            <div className="switch-fluid">
              <div className="row">
                  <Link to="/" type="button"
                    className="btn btn-default align-left">
                    REQUEST A RIDE
                  </Link>
              </div>
            </div>
        </footer>
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
