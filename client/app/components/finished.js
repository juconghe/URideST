import React from 'react';
import Footer from './footer';
class Finished extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    this.props.swtich(data);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 centered">
              <div className="text-center">
                <div className="container-fluid">
                  <div className="row">
                      <div className="well">
                        <h1>Your ride has been requested.
                          It is currently pending. The dispatcher will review your request
                          as soon as possible
                        </h1>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <Footer currentPage={this.props.currentPage} switch={this.handleSwitch}/>
      </div>
    );
  }
}
module.exports = Finished;
