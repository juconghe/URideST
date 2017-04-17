import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleRootPage = this.handleRootPage.bind(this);
  }

  handleNextPage() {
    let currentPage = this.props.currentPage;
    let nextPage = "";
    if (currentPage == "Home") {
      nextPage = "requestDate";
    } else if (currentPage == "requestDate"){
      nextPage = "pickUp";
    } else if (currentPage == "pickUp") {
      nextPage = "dropOff"
    } else if (currentPage == "dropOff") {
      nextPage = "specialAccess";
    } else if (currentPage == "specialAccess") {
      nextPage = "availableTime"
    } else if (currentPage == "availableTime") {
      nextPage = "finished";
    } else {
      nextPage = "Home";
    }
    const data = {
      currentPage:nextPage
    }
    this.props.switch(data);
  }

  handlePrevPage() {
    let currentPage = this.props.currentPage;
    let previousPage = "";
    if (currentPage == "Home") {
      previousPage = "Home";
    } else if (currentPage == "requestDate"){
      previousPage = "Home";
    } else if (currentPage == "pickUp") {
      previousPage = "requestDate"
    } else if (currentPage == "dropOff") {
      previousPage = "pickUp";
    } else if (currentPage == "specialAccess") {
        previousPage = "dropOff"
    } else if (currentPage == "avaliableTime") {
      previousPage = "specialAccess";
    } else {
      previousPage = "avaliableTime";
    }
    const data = {
      currentPage:previousPage
    }
    console.log("Going back");
    this.props.switch(data);
  }

  handleRootPage() {
    const data = {
      currentPage:"Home"
    }
    this.props.switch(data);
  }

  render() {
    let row = null;
    const currentPage = this.props.currentPage;
    if (currentPage == "Home" || currentPage == "finished") {
      row = <div className="row">
            <a href="#" type="button" className="btn btn-default align-left"
              onClick={this.handleRootPage}>
              Home
            </a>
            </div>
    }
    else if (currentPage=="availableTime"){
      row = <div className="row">
            <a href="#" type="button" className="btn btn-default pull-right"
              onClick={this.handleNextPage}>
              Submit
            </a>
            </div>
    }
    else {
      row = <div className="row">
              <div className="btn-group" role="group">
                <a ref="#" type="button"
                  className="btn btn-default"
                  onClick={this.handlePrevPage}>Back</a>
                <a ref="/" type="button"
                  className="btn btn-default"
                  onClick={this.handleRootPage}>Cancel</a>
              </div>
              <div className="btn-group left-btn pull-right" role="group">
                <a ref="/pickUp" type="button"
                  className="btn btn-default"
                  onClick={this.handleNextPage}>Next</a>
              </div>
            </div>
    }

    return (
      <div>
        <footer className="footer">
            <div className="container-fluid">
              {row}
            </div>
        </footer>
     </div>
    )
  }
}
module.exports = Footer
