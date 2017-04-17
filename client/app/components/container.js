const React = require('react');
const Navbar = require('./navbar');
const RequestBtns = require('./requestbtns');
const PickDate = require('./pickdate');
const PickUp = require('./pickup');
const DropOff = require('./dropoff');
const Finished = require('./finished');
const SpecialAccess = require('./SpecialAccess');
const AvailableTime = require('./availableTime');
import {submitRequest} from '../server';
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:this.props.currentPage,
    }
    this.handleSwitchPage = this.handleSwitchPage.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleSwitchPage(nextPage){
    // console.log(nextPage);
    this.setState({
      currentPage:nextPage.currentPage,
    });
  }

  handlePost() {
    submitRequest(1,this.state,(data)=>{
      console.log(data);
    });
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
         switch={this.handleSwitchPage}/>
    } else if (currentPage == "pickUp") {
      page = <PickUp  currentPage={currentPage}
        switch={this.handleSwitchPage}/>
    } else if (currentPage == "dropOff") {
      page = <DropOff  currentPage={currentPage}
        switch={this.handleSwitchPage}/>
    } else if (currentPage == "specialAccess") {
      page = <SpecialAccess  currentPage={currentPage}
        switch={this.handleSwitchPage}/>
    } else if (currentPage == "availableTime") {
      page = <AvailableTime currentPage={currentPage}
                            switch={this.handleSwitchPage}/>
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
