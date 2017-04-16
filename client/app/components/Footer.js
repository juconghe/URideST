import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                  <div class="btn-group" role="group">
                    <a href="pickup.html" type="button" class="btn btn-default">Back</a>
                    <a href="index.html" type="button" class="btn btn-default">Cancel</a>
                  </div>
                  <div class="btn-group left-btn pull-right" role="group">
                    <a href="specialAccess.html" type="button" class="btn btn-default">Next</a>
                  </div>
                </div>
            </div>
        </footer>
     </div>
    )
  }
}
