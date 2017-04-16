import Navbar from './navbar';
import Footer from './footer';
import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

$(document).ready(function() {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})


export default class PickDate extends React.Component {

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 centered">
            <div className="text-center">
                <div className="container-fluid">
                  <div className="row">
                    <form method="post">
                      <div className="form-group">
                        <div className="well">
                            Select a Date
                        </div>
                        <input className="form-control input-lg" id="date" name="date" placeholder="MM/DD/YYYY" type="text" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          <div className="col-md-4">
          </div>
        </div>

      <Footer />
      </div>
    );
  }
}
