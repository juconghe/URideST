import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Navbar from './components/navbar';
import RequestBtns from './components/requestbtns';
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component{
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

ReactDOM.render(
  <App />,
  document.getElementById('App')
);
