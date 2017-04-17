import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleRootPage = this.handleRootPage.bind(this);
  }

  handleNextPage() {
    const data = {
      previousPage:this.props.currentPage,
      currentPage:"requestDate"
    }
    this.props.next(data);
  }

  handlePrevPage() {
    let currentPage = this.props.currentPage;
    let previousPage = "";
    if (currentPage == "Home") {
      previousPage = "Home";
    } else if (currentPage == "requestDate"){
      previousPage = "Home";
    } else if (currentPage == "pickUp") {
      previousPage = "Home"
    } else if (currentPage == "dropOff") {
      previousPage = "requestDate";
    } else if (currentPage == "specialAccess") {
        previousPage = "pickUp"
    } else if (currentPage == "avaliableTime") {
      previousPage = "requestDate";
    } else {
      previousPage = "specialAccess";
    }
    const data = {
      currentPage:this.props.previousPage,
      previousPage:previousPage
    }
    console.log(data);
    this.props.prev(data);
  }

  handleRootPage() {
    const data = {
      previousPage:"Home",
      currentPage:"Home"
    }
  }

  render() {
    return (
      <div>
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                  <div className="btn-group" role="group">
                    <a ref="#" type="button"
                      className="btn btn-default"
                      onClick={this.handleNextPage}>Back</a>
                    <a ref="/" type="button"
                      className="btn btn-default"
                      onClick={this.handlePreviousPage}>Cancel</a>
                  </div>
                  <div className="btn-group left-btn pull-right" role="group">
                    <a ref="/pickUp" type="button"
                      className="btn btn-default"
                      onClick={this.handleRootPage}>Next</a>
                  </div>
                </div>
            </div>
        </footer>
     </div>
    )
  }
}
module.exports = Footer
