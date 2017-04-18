import Footer from './footer'
const React = require('react');

class SpecialAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     specialAccess: ""
   };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSpecialAccess = this.handleSpecialAccess.bind(this);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    if (newpage.currentPage == "availableTime"){
      this.props.save("specialAccess",this.state.specialAccess);
      this.props.switch(data);
    } else {
      // go back to previous, disregard data
      this.props.switch(data);
    }
  }

  handleSpecialAccess(sa) {
    sa.preventDefault(sa);
    this.setState({specialAccess: sa.target.value});
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
                        <form method="post">
                            <div className="form-group ">
                              <div className="panel panel-default">
                                  <div className="well">
                                    Enter your special accessibility options
                                  </div>
                              </div>
                              <div className="row">
                                  <textarea placeholder="Enter custom message here ..."
                                    className="form-control"  onChange={this.handleSpecialAccess}/>
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
        <Footer currentPage={this.props.currentPage} switch={this.handleSwitch}/>
      </div>
    );
  }
}
module.exports = SpecialAccess;
