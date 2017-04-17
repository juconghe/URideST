import React from 'react';
class Finished extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-4">
        </div>
        <div className="col-md-4 centered">
            <div className="text-center">
              <div className="container-fluid" style="max-width:450px">
                <div className="row">
                    <div className="well">
                      <h1>Your ride has been requested.
                        It is currently pending. The dispatcher will review your request
                        as soon as possible
                      </h1>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    );
  }
}
module.exports = Finished;
