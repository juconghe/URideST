const React = require('react');

export default class RideTable extends React.Component {
  render() {
    return (
      <div class="col-md-4">
          <div class="panel panel-default">
              <div class="panel-heading">Previous Ride</div>
              <div class="panel-body">
                  <ul class="list-group">
                      <li class="list-group-item">
                          <a href="#">Dapibus ac facilisis in</a>
                          <a class="pull-right" href="#">HAHAHAH</a>
                      </li>
                      <div class="list-group-separator"></div>
                      <li class="list-group-item">
                          <a href="#">Cras sit amet nibh libero</a>
                          <a class="pull-right" href="#">HAHAHAH</a>
                      </li>
                      <div class="list-group-separator"></div>
                      <li class="list-group-item">
                          <a href="#">Porta ac consectetur ac</a>
                          <a class="pull-right" href="#">HAHAHAH</a>
                      </li>
                      <div class="list-group-separator"></div>
                      <li class="list-group-item">
                          <a href="#">Vestibulum at eros</a>
                          <a class="pull-right" href="#">HAHAHAH</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
