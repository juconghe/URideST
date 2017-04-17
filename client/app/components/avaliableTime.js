import React from 'react';
import Footer from './footer';

class AvailableTime extends React.Component{
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    this.props.switch(data);
  }
  render(){
    return(
    <div>
      <div className="container">
        <div className="col-md-4">
        </div>
        <div className="col-md-4 centered">
            <div className="text-center">
                <div className="container-fluid">
                    <div className="row">
                      <form method="post">
                          <div className="form-group ">
                            <div className="well">
                              Select an Available Time
                            </div>
                              <select className="select form-control" id="select" name="select">
                                <option value="Army ROTC">
                                  2:15pm-3:15pm
                                </option>
                                <option value="Library">
                                  3:15pm-4:15pm
                                </option>
                                <option value="Studio Arts Building">
                                  4:15pm-5:15pm
                                </option>
                                <option value="Arnold House">
                                  5:15pm-6:15pm
                                </option>
                              </select>
                          </div>
                      </form>
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

module.exports = AvailableTime;
