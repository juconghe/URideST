import React from 'react';
import Footer from './footer';

class AvailableTime extends React.Component{
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = {
      availableTime: "8:00am-8:15am"
    };
    this.handleAvailableTime = this.handleAvailableTime.bind(this);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    if (newpage.currentPage == "finished"){
      this.props.save("availableTime",this.state.availableTime,data);
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
                                <option value="8:00am-8:15am">
                                8:00am-8:15am
                                </option>
                                <option value="8:15am-8:30am">
                                8:15am-8:30am
                                </option>
                                <option value="8:30am-8:45am">
                                8:30am-8:45am
                                </option>
                                <option value="8:45am-9:00am">
                                8:45am-9:00am
                                </option>
                                <option value="9:00am-9:15am">
                                9:00am-9:15am
                                </option>
                                <option value="8:15am-8:30am">
                                9:15am-9:30am
                                </option>
                                <option value="8:30am-8:45am">
                                9:30am-9:45am
                                </option>
                                <option value="8:45am-9:00am">
                                9:45am-10:00am
                                </option>
                                <option value="10:00am-10:15am">
                                10:00am-10:15am
                                </option>
                                <option value="10:15am-10:30am">
                                10:15am-10:30am
                                </option>
                                <option value="10:30am-10:45am">
                                10:30am-10:45am
                                </option>
                                <option value="10:45am-11:00am">
                                10:45am-11:00am
                                </option>
                                <option value="11:00am-11:15am">
                                11:00am-11:15am
                                </option>
                                <option value="11:15am-11:30am">
                                11:15am-11:30am
                                </option>
                                <option value="11:30am-11:45am">
                                11:30am-11:45am
                                </option>
                                <option value="11:45am-12:00pm">
                                11:45am-12:00pm
                                </option>
                                <option value="12:00pm-12:15pm">
                                12:00pm-12:15pm
                                </option>
                                <option value="12:15pm-12:30pm">
                                12:15pm-12:30pm
                                </option>
                                <option value="12:30pm-12:45pm">
                                12:30pm-12:45pm
                                </option>
                                <option value="12:45pm-1:00pm">
                                12:45pm-1:00pm
                                </option>
                                <option value="1:00pm-1:15pm">
                                1:00pm-1:15pm
                                </option>
                                <option value="1:15pm-1:30pm">
                                1:15pm-1:30pm
                                </option>
                                <option value="1:30pm-1:45pm">
                                1:30pm-1:45pm
                                </option>
                                <option value="1:45pm-2:00pm">
                                1:45pm-2:00pm
                                </option>
                                <option value="2:00pm-2:15pm">
                                2:00pm-2:15pm
                                </option>
                                <option value="2:15pm-2:30pm">
                                2:15pm-2:30pm
                                </option>
                                <option value="2:30pm-2:45pm">
                                2:30pm-2:45pm
                                </option>
                                <option value="2:45pm-3:00pm">
                                2:45pm-3:00pm
                                </option>
                                <option value="3:00pm-3:15pm">
                                3:00pm-3:15pm
                                </option>
                                <option value="3:15pm-3:30pm">
                                3:15pm-3:30pm
                                </option>
                                <option value="3:30pm-3:45pm">
                                3:30pm-3:45pm
                                </option>
                                <option value="3:45pm-4:00pm">
                                3:45pm-4:00pm
                                </option>
                                <option value="4:00pm-4:15pm">
                                4:00pm-4:15pm
                                </option>
                                <option value="4:15pm-4:30pm">
                                4:15pm-4:30pm
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
