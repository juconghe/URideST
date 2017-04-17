const React = require('react');
const Navbar = require('./navbar');
const RequestBtns = require('./requestbtns');
const PickDate = require('./pickdate');
const PickUp = require('./pickup');
const DropOff = require('./dropoff');
const Finished = require('./finished');
const SpecialAccess = require('./SpecialAccess');
const AvaliableTime = require('./avaliableTime');

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:this.props.currentPage,
    }
    this.handleSwtichPage = this.handleSwtichPage.bind(this);
    // console.log(this.props);
  }

  handleSwtichPage(nextPage){
    // console.log(nextPage);
    this.setState({
      currentPage:nextPage.currentPage,
    });
  }

  render() {
    let currentPage = this.state.currentPage;
    let page = null;
    console.log(currentPage);
    if (currentPage == "Home") {
      page = <RequestBtns  currentPage={currentPage}
        swtich={this.handleSwtichPage}/>
    } else if (currentPage == "requestDate"){
      page = <PickDate  currentPage={currentPage}
         swtich={this.handleSwtichPage}/>
    } else if (currentPage == "pickUp") {
      page = <PickUp  currentPage={currentPage}
        swtich={this.handleSwtichPage}/>
    } else if (currentPage == "dropOff") {
      page = <DropOff  currentPage={currentPage}
        swtich={this.handleSwtichPage}/>
    } else if (currentPage == "specialAccess") {
      page = <SpecialAccess  currentPage={currentPage}
        swtich={this.handleSwtichPage}/>
    } else if (currentPage == "avaliableTime") {
      page = <AvaliableTime  currentPage={currentPage}
        swtich={this.handleSwtichPage}/>
    } else {
      page = <Finished  currentPage={currentPage}
        swtich={this.handleSwtichPage}/>
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
