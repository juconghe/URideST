import Navbar from './navbar';
import Footer from './footer'
const React = require('react');
class SpecialAccess extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 centered">
              <div className="text-center">
                  <div className="container-fluid">
                      <div className="row">
                        <form method="post">
                            <div className="form-group ">
                              <div className="panel panel-default">
                                  <div className="well">
                                    Enter your special accessibility options
                                  </div>
                              </div>
                              <div className="row">
                                  <textarea placeholder="Enter custom message here ..." className="form-control" />
                              </div>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
module.exports = SpecialAccess;
