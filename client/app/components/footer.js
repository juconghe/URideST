import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                  <div className="btn-group" role="group">
                    <Link to="/" type="button" className="btn btn-default">Back</Link>
                    <Link to="/" type="button" className="btn btn-default">Cancel</Link>
                  </div>
                  <div className="btn-group left-btn pull-right" role="group">
                    <Link to="/pickUp" type="button" className="btn btn-default">Next</Link>
                  </div>
                </div>
            </div>
        </footer>
     </div>
    )
  }
}
