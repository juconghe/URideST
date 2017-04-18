const React = require('react');
const Navbar = require('./navbar');
const RequestBtns = require('./requestbtns');
const PickDate = require('./pickdate');
const PickUp = require('./pickup');
const DropOff = require('./dropoff');
const Finished = require('./finished');
const SpecialAccess = require('./SpecialAccess');
const AvailableTime = require('./availableTime');
const moment = require('moment');
import {submitRequest} from '../server';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:this.props.currentPage,
      pickUpTime: null,
      pickUpDate: null,
      isRecurring: false,
      isConfirmed: false,
      dropOff: null,
      pickUp: null,
      van: null,
      user: 1,
      specialAccess:null
    };
    this.handleSwitchPage = this.handleSwitchPage.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleSwitchPage(nextPage){
    // console.log(nextPage);
    this.setState({
      currentPage:nextPage.currentPage
    });
  }

  handlePost() {
    // console.log(this.state);
    submitRequest(1,this.state,(data)=>{
      console.log(data);
    });
  }

  handleDataChange(action,newData,nextPage) {
    if(action == "pickupDate") {
      // console.log(newData.toDate());
      this.setState({pickUpDate:moment(newData).format("MMM Do YY"),
      currentPage:nextPage.currentPage});
    } else if(action == "pickup") {
      // console.log(newData);
      this.setState({pickUp:newData,
      currentPage:nextPage.currentPage});
    } else if (action == "dropOff") {
      this.setState({dropOff:newData,
      currentPage:nextPage.currentPage});
    } else if (action == "specialAccess") {
      this.setState({specialAccess:newData,
      currentPage:nextPage.currentPage});
    } else {
      this.setState({pickUpTime:newData,
      currentPage:nextPage.currentPage});
    }
  }

  render() {
    let currentPage = this.state.currentPage;
    let page = null;
    // console.log(currentPage);
    if (currentPage == "Home") {
      page = <RequestBtns  currentPage={currentPage}
        switch={this.handleSwitchPage}/>
    } else if (currentPage == "requestDate"){
      page = <PickDate  currentPage={currentPage}
         switch={this.handleSwitchPage}
         save={this.handleDataChange}/>
    } else if (currentPage == "pickUp") {
      page = <PickUp  currentPage={currentPage}
        switch={this.handleSwitchPage}
        save={this.handleDataChange}/>
    } else if (currentPage == "dropOff") {
      page = <DropOff  currentPage={currentPage}
        switch={this.handleSwitchPage}
        save={this.handleDataChange}/>
    } else if (currentPage == "specialAccess") {
      page = <SpecialAccess  currentPage={currentPage}
        switch={this.handleSwitchPage}
        save={this.handleDataChange}/>
    } else if (currentPage == "availableTime") {
      page = <AvailableTime currentPage={currentPage}
        switch={this.handleSwitchPage}
        save={this.handleDataChange}/>
    } else {
      page = <Finished  currentPage={currentPage}
        switch={this.handleSwitchPage} onPost={this.handlePost}/>
    }

    return(
      <div>
        <Navbar />
        {page}
      </div>
    );
  }
}
module.exports = Container;
