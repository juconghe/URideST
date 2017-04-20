const React = require('react');
import Footer from './footer';
import {getLocationData} from '../server';

class DropOff extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state={
      dropOffValue:'',
      dropOffLocation: ["*"]
    }
    this.handleDropOffLocation = this.handleDropOffLocation.bind(this);
  }

  componentDidMount() {
    getLocationData((locationData)=> {
      this.setState({dropOffLocation:locationData});
    })
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    if (newpage.currentPage == "specialAccess"){
      this.props.save("dropOff",this.state.dropOffValue,data);
    } else {
      // go back to previous, disregard data
      this.props.switch(data);
    }
  }

  handleDropOffLocation(e){
    e.preventDefault(e);
    this.setState({dropOffValue: e.target.value});
  }

  render() {
    const locations = this.state.dropOffLocation;
    return (
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
                                      Select a Dropoff Location
                                    </div>
                                    <select className="select form-control" value={this.state.dropOffValue} id="select" name="select"
                                      onChange={this.handleDropOffLocation}>
                                      <option value="*" >
                                          *
                                      </option>
                                      {locations.map((location) =>
                                        <option key={location._id} value={location.building} >
                                            {location.building}
                                        </option>
                                      )}
                                    </select>
                                  </div>
                                  <div className="form-group ">
                                      <input className="form-control input-lg" id="text" name="text" placeholder="Enter custom address here" type="text" />
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
module.exports = DropOff;
