const React = require('react');


export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="index.html">
                      <img src="img/umass.png" height="30" width="90" />
                  </a>
              </div>
          </div>
      </nav>
    );
  }
}
