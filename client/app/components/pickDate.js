var Footer = require('./footer');
var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

class PickDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     startDate: moment()
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSwitch = this.handleSwitch.bind(this);
 }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    this.props.switch(data);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
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
                      <div className="form-group">
                        <div className="well">
                            Select a Date
                        </div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
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
module.exports = PickDate;
