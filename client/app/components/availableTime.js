import React from 'react';
import Footer from './footer';

class AvailableTime extends React.Component{
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = {
      availableTime: "2:15pm-3:15pm"
    };
    this.handleAvailableTime = this.handleAvailableTime.bind(this);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    if (newpage.currentPage == "finished"){
      this.props.save("availableTime",this.state.availableTime);
      this.props.switch(data);
    } else {
      // go back to previous, disregard data
      this.props.switch(data);
    }
  }

  handleAvailableTime(at) {
    at.preventDefault(at);
    this.setState({availableTime: at.target.value});
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
                              <select className="select form-control" value={this.state.availableTime}
                                id="select" name="select" onChange={this.handleAvailableTime}>
                                <option value="2:15pm-3:15pm">
                                2:15pm-3:15pm
                                </option>
                                <option value="3:15pm-4:15pm">
                                3:15pm-4:15pm
                                </option>
                                <option value="4:15pm-5:15pm">
                                4:15pm-5:15pm
                                </option>
                                <option value="5:15pm-6:15pm">
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
