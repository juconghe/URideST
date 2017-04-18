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
      vanView: true
    }
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleSwitchTab() {
    this.setState(prevState => ({
      vanView:!prevState.vanView
    }));
  }

  render(){
    let list = null;
    let days = this.state.days;
    let vans = this.state.vans;
    let vanView = this.state.vanView;
    if(vanView){
      list = <ListGoup items={days}/>

    } else {
      list = <ListGoup items={vans}/>
    }
    return(
      <div className="col-md-2 nopadding">
        <div className="panel panel-default">
            <div className="panel-heading">
              <div className="btn-group btn-group-justified" role="group">
                <a type="button" className="btn btn-raised btn-default"
                  onClick={this.handleSwitchTab}>
                  VAN
                </a>
                <a type="button" className="btn btn-raised btn-default"
                  onClick={this.handleSwitchTab}>
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
