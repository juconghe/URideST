const React = require('react');
const Navbar = require('./navbar');
const RequestBtns = require('./requestbtns');
const PickDate = require('./pickdate');
const Footer = require('./footer');
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
      previousPage:this.props.previousPage,
    }
    // console.log(this.props);
  }

  handleNextPage(nextPage){
    // console.log(nextPage);
    this.setState({
      currentPage:nextPage.currentPage,
      previousPage:nextPage.previousPage
    });
  }

  handlePreviousPage(prevPage){
    this.setState({
      currentPage:prevPage
    });
  }

  render() {
    let currentPage = this.state.currentPage;
    let previousPage = this.state.previousPage;
    let page = null;
    if (currentPage == "Home") {
      page = <RequestBtns previousPage={previousPage} currentPage={currentPage}
        next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    } else if (currentPage == "requestDate"){
      page = <PickDate previousPage={previousPage} currentPage={currentPage}
         next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    } else if (currentPage == "pickUp") {
      page = <PickUp previousPage={previousPage} currentPage={currentPage}
        next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    } else if (currentPage == "dropOff") {
      page = <DropOff previousPage={previousPage} currentPage={currentPage}
        next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    } else if (currentPage == "specialAccess") {
      page = <SpecialAccess previousPage={previousPage} currentPage={currentPage}
        next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    } else if (currentPage == "avaliableTime") {
      page = <AvaliableTime previousPage={previousPage} currentPage={currentPage}
        next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    } else {
      page = <Finished previousPage={previousPage} currentPage={currentPage}
        next={(nextPage) => this.handleNextPage(nextPage)} prev={(prevPage) => this.handlePreviousPage(prevPage)}/>
    }

    return(
      <div>
        <Navbar />
        {page}
        <Footer />
      </div>
    );
  }
}
module.exports = Container;
