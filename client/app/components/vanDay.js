const React = require('react');
const ListGoup = require('./listGroup');
class VanDay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days:[[0,"Sunday"],
            [1, "Monday"],
            [2, "Tuesday"],
            [3, "Wednesday"],
            [4, "Thursday"],
            [5, "Friday"],
            [6, "Saturday"]],
      vans: [[0, "Van 1"],
             [1, "Van 2"],
             [2, "Van 3"],
             [3, "Van 4"],
             [4, "Van 5"]],
      vanView: true,
      dayView: false
    }
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleSwitchTab(tab) {
    this.setState({
      days: tab.days,
      vans: tab.vans,
      vanView: tab.vanView,
      dayView: tab.dayView
    });
  }

  handleVanClick(event){
    event.preventDefault();
    this.setState({
      vanView: true,
      dayView: false
    });
  }

  handleDayClick(event){
    event.preventDefault();
    this.setState({
      dayView: true,
      vanView: false
    });
  }


  render(){
    let list = null;
    let days = this.state.days;
    let vans = this.state.vans;
    let vanView = this.state.vanView;
    let dayView = this.state.dayView;
    if(dayView== true){
      list = <ListGoup items={days}/>
      }
    else {
      list = <ListGoup items={vans}/>
    }
    return(
      <div className="col-md-2 nopadding">
        <div className="panel panel-default">
            <div className="panel-heading">
              <div className="btn-group btn-group-justified" role="group">
                <a href="#" type="button" className="btn btn-raised btn-default" onClick={this.handleVanClick}>
                  VAN
                </a>
                <a href="#" type="button" className="btn btn-raised btn-default" onClick={this.handleDayClick}>
                  DAY
                </a>
              </div>
            </div>
            <div className="panel-body">
              {list}
            </div>
        </div>
      </div>
    );
  }
}
module.exports = VanDay;
