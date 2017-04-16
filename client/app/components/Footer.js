import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                  <div className="btn-group" role="group">
                    <a href="pickup.html" type="button" className="btn btn-default">Back</a>
                    <a href="index.html" type="button" className="btn btn-default">Cancel</a>
                  </div>
                  <div className="btn-group left-btn pull-right" role="group">
                    <a href="specialAccess.html" type="button" className="btn btn-default">Next</a>
                  </div>
                </div>
            </div>
        </footer>
     </div>
    )
  }
}
