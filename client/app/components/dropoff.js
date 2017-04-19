const React = require('react');
import Footer from './footer';

class DropOff extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state={
      dropOffLocation: "Army ROTC"
    }
    this.handleDropOffLocation = this.handleDropOffLocation.bind(this);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    if (newpage.currentPage == "specialAccess"){
      this.props.save("dropOff",this.state.dropOffLocation,data);
    } else {
      // go back to previous, disregard data
      this.props.switch(data);
    }
  }

  handleDropOffLocation(e){
    e.preventDefault(e);
    this.setState({dropOffLocation: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 centered">
              <div className="text-center">
                  <div className="container-fluid">
                      <div className="row">
                              <form method="post">
                                  <div className="form-group ">
                                    <div className="well">
                                      Select a Dropoff Location
                                    </div>
                                    <select className="select form-control" value={this.state.dropOffLocation} id="select" name="select"
                                      onChange={this.handleDropOffLocation}>
                                        <option value="Agricultural Engineering Bldg, 250 NATURAL RESOURCES RD, AMHERST, MA 01003-9295">
                                            Agricultural Engineering Bldg
                                        </option>
                                        <option value="Agricultural Experiment Station (Alterations), 160 TILLSON FARM RD, AMHERST, MA 01003-9346">
                                            Agricultural Experiment Station (Alterations)
                                        </option>
                                        <option value="Army ROTC Bldg, 101 COMMONWEALTH AVE, AMHERST, MA 01003-9252">
                                            Army ROTC Bldg
                                        </option>
                                        <option value="Arnold House, 715 N PLEASANT, AMHERST, MA 01003-9304">
                                            Arnold House
                                        </option>
                                        <option value="(Studio) Arts Building, 110 THATCHER RD, AMHERST, MA 01003-9356">
                                            (Studio) Arts Building
                                        </option>
                                        <option value="Auxiliary Services Warehouse, 31 COLD STORAGE DR, AMHERST, MA 01003-9344">
                                            Auxiliary Services Warehouse
                                        </option>
                                        <option value="Baker House (offices), 160 CLARK HILL RD OFC, AMHERST, MA 01003-9321">
                                            Baker House (offices)
                                        </option>
                                        <option value="Bartlett Hall, 130 HICKS WAY, AMHERST, MA 01003-9269">
                                            Bartlett Hall
                                        </option>
                                        <option value="Berkshire House, 121 COUNTY CIR, AMHERST, MA 01003-9256">
                                            Berkshire House
                                        </option>
                                        <option value="Berkshire Dining Common, 121 SOUTHWEST CIR, AMHERST, MA 01003-9314">
                                            Berkshire Dining Common
                                        </option>
                                        <option value="Blaisdell, 113 GRINNELL WAY, AMHERST, MA 01003-9367">
                                            Blaisdell
                                        </option>
                                        <option value="Bowditch Hall, 201 NATURAL RESOURCES RD, AMHERST, MA 01003-9294">
                                            Bowditch Hall
                                        </option>
                                        <option value="Bowditch Lodge, 31 CLUBHOUSE DR, AMHERST, MA 01003-9250">
                                            Bowditch Lodge
                                        </option>
                                        <option value="Boyden, 131 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Boyden
                                        </option>
                                        <option value="Brett (Offices), 151 INFIRMARY WAY OFC, AMHERST, MA 01003-9322">
                                            Brett (Offices)
                                        </option>
                                        <option value="Campus Center, 1 CAMPUS CENTER WAY, AMHERST, MA 01003-9243">
                                            Campus Center
                                        </option>
                                        <option value="Cance (offices), 191 FEARING OFC, AMHERST, MA 01003-9323">
                                            Cance (offices)
                                        </option>
                                        <option value="Central Heating Plant, 200 MULLINS WAY, AMHERST, MA 01003-9352">
                                            Central Heating Plant
                                        </option>
                                        <option value="Champions Center, 190 COMMONWEALTH AVE, AMHERST, MA 01003-9398">
                                            Champions Center
                                        </option>
                                        <option value="Chancellor's House, 150 CHANCELLORS DR, AMHERST, MA 01003-9249">
                                            Chancellor's House
                                        </option>
                                        <option value="Chenoweth Laboratory, 100 HOLDSWORTH WAY, AMHERST, MA 01003-9282">
                                            Chenoweth Laboratory
                                        </option>
                                        <option value="Clark Hall, 251 STOCKBRIDGE RD, AMHERST, MA 01003-9319">
                                            Clark Hall
                                        </option>
                                        <option value="(William S.) Clark International Center (Hills), 111 THATCHER RD OFC 3, AMHERST, MA 01003-9361">
                                            (William S.) Clark International Center (Hills)
                                        </option>
                                        <option value="Commonwealth Honors College, 157 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Commonwealth Honors College
                                        </option>
                                        <option value="Communication Disorders, 358 N PLEASANT ST, AMHERST, MA 01003-9296">
                                            Communication Disorders
                                        </option>
                                        <option value="Computer Science Bldg, 140 GOVERNORS DR, AMHERST, MA 01003-9264">
                                            Computer Science Bldg
                                        </option>
                                        <option value="Condensate Storage Building, 30 CAMPUS CENTER SERVICE RD, AMHERST, MA 01003-9244">
                                            Condensate Storage Building
                                        </option>
                                        <option value="Conte Polymer Center, 120 GOVERNORS DR, AMHERST, MA 01003-9263">
                                            Conte Polymer Center
                                        </option>
                                        <option value="Continuing Education, 100 VENTURE WAY, SUITE 201, HADLEY, MA 01035-9430">
                                            Continuing Education
                                        </option>
                                        <option value="Crotty Hall, 412 N PLEASANT ST, AMHERST, MA 01002-2900">
                                            Crotty Hall
                                        </option>
                                        <option value="Curry Hicks, 100 HICKS WAY, AMHERST, MA 01003-9267">
                                            Curry Hicks
                                        </option>
                                        <option value="Design Building, 551 N PLEASANT ST, AMHERST, MA 01003-2901">
                                            Design Building
                                        </option>
                                        <option value="Dickinson Hall, 155 HICKS WAY, AMHERST, MA 01003-9363">
                                            Dickinson Hall
                                        </option>
                                        <option value="Draper Hall, 40 CAMPUS CENTER WAY, AMHERST, MA 01003-9244">
                                            Draper Hall
                                        </option>
                                        <option value="East Experiment Station, 671 N PLEASANT ST, AMHERST, MA 01003-9301">
                                            East Experiment Station
                                        </option>
                                        <option value="Engineering Laboratory, 160 GOVERNORS DR, AMHERST, MA 01003-9265">
                                            Engineering Laboratory
                                        </option>
                                        <option value="Engineering Laboratory II (E Lab II), 101 NORTH SERVICE RD, AMHERST, MA 01003-9345">
                                            Engineering Laboratory II (E Lab II)
                                        </option>
                                        <option value="Faculty Club, 243 STOCKBRIDGE RD, AMHERST, MA 01003-9317">
                                            Faculty Club
                                        </option>
                                        <option value="Farley Lodge, 41 CLUBHOUSE DR, AMHERST, MA 01003-9251">
                                            Farley Lodge
                                        </option>
                                        <option value="Fernald Hall, 270 STOCKBRIDGE RD, AMHERST, MA 01003-9320">
                                            Fernald Hall
                                        </option>
                                        <option value="Fine Arts Center (East), 151 PRESIDENTS DR OFC 1, AMHERST, MA 01003-9330">
                                            Fine Arts Center (East)
                                        </option>
                                        <option value="Fine Arts Center (West), 151 PRESIDENTS DR OFC 2, AMHERST, MA 01003-9331">
                                            Fine Arts Center (West)
                                        </option>
                                        <option value="Flint Laboratory, 90 CAMPUS CENTER WAY, AMHERST, MA 01003-9247">
                                            Flint Laboratory
                                        </option>
                                        <option value="Football Performance Center, 290 STADIUM DR, AMHERST, MA 01003-9397">
                                            Football Performance Center
                                        </option>
                                        <option value="Franklin Dining Common, 260 STOCKBRIDGE RD, AMHERST, MA 01003-9314">
                                            Franklin Dining Common
                                        </option>
                                        <option value="French Hall, 230 STOCKBRIDGE RD, AMHERST, MA 01003-9316">
                                            French Hall
                                        </option>
                                        <option value="Furcolo Hall, 813 N PLEASANT ST, AMHERST, MA 01003-9308">
                                            Furcolo Hall
                                        </option>
                                        <option value="Goessmann Laboratory, 686 N PLEASANT ST, AMHERST, MA 01003-9303">
                                            Goessmann Laboratory
                                        </option>
                                        <option value="Goodell Bldg, 140 HICKS WAY, AMHERST, MA 01003-9272">
                                            Goodell Bldg
                                        </option>
                                        <option value="Goodell Bldg (Graduate School), 140 HICKS WAY OFC 1, AMHERST, MA 01003-9333">
                                            Goodell Bldg (Graduate School)
                                        </option>
                                        <option value="Goodell Bldg (Procurement), 140 HICKS WAY OFC 2, AMHERST, MA 01003-9334">
                                            Goodell Bldg (Procurement)
                                        </option>
                                        <option value="Gordon Hall, 418 N PLEASANT ST, AMHERST, MA 01002-1735">
                                            Gordon Hall
                                        </option>
                                        <option value="Gunness Lab, 121 NATURAL RESOURCES RD, AMHERST, MA, 1003">
                                            Gunness Lab
                                        </option>
                                        <option value="Hampden Dining Common, 131 SOUTHWEST CIR , AMHERST, MA 01003-9314">
                                            Hampden Dining Common
                                        </option>
                                        <option value="Hampshire Dining Common, 141 SOUTHWEST CIR, AMHERST, MA 01003-9314">
                                            Hampshire Dining Common
                                        </option>
                                        <option value="Hampshire House, 131 COUNTY CIR, AMHERST, MA 01003-9257">
                                            Hampshire House
                                        </option>
                                        <option value="Hasbrouck Laboratory, 666 N PLEASANT ST, AMHERST, MA 01003-9300">
                                            Hasbrouck Laboratory
                                        </option>
                                        <option value="Hatch Laboratory, 140 HOLDSWORTH WAY, AMHERST, MA 01003-9283">
                                            Hatch Laboratory
                                        </option>
                                        <option value="Health Center, 150 INFIRMARY WAY, AMHERST, MA 01003-9288">
                                            Health Center
                                        </option>
                                        <option value="Herter Hall, 161 PRESIDENTS DR, AMHERST, MA 01003-9312">
                                            Herter Hall
                                        </option>
                                        <option value="Hillel House, 388 NO PLEASANT ST #15, AMHERST, MA 01002-1753">
                                            Hillel House
                                        </option>
                                        <option value="Hills North, 111 THATCHER RD OFC 1, AMHERST, MA 01003-9361">
                                            Hills North
                                        </option>
                                        <option value="Hills South, 111 THATCHER RD OFC 2, AMHERST, MA 01003-9361">
                                            Hills South
                                        </option>
                                        <option value="Holdsworth Hall, 160 HOLDSWORTH WAY, AMHERST, MA 01003-9285">
                                            Holdsworth Hall
                                        </option>
                                        <option value="Institute for Holocaust, 758 N PLEASANT ST, AMHERST, MA 01002-1310">
                                            Institute for Holocaust
                                        </option>
                                        <option value="Isenberg School of Management, 121 PRESIDENTS DR, AMHERST, MA 01003-9310">
                                            Isenberg School of Management
                                        </option>
                                        <option value="Integrated Science Building, 661 N PLEASANT ST, AMHERST, MA 01003-9301">
                                            Integrated Science Building
                                        </option>
                                        <option value="Integrative Learning Center, 650 N PLEASANT ST, AMHERST, MA 01003-1100">
                                            Integrative Learning Center
                                        </option>
                                        <option value="John Quincy Adams Tower, 171 FEARING ST OFC, AMHERST, MA 01003-9325">
                                            John Quincy Adams Tower
                                        </option>
                                        <option value="Johnson House (offices), 380 THATCHER RD OFC, AMHERST, MA 01003-9359">
                                            Johnson House (offices)
                                        </option>
                                        <option value="Knowles Engineering Bldg, 151 HOLDSWORTH WAY, AMHERST, MA 01003-9284">
                                            Knowles Engineering Bldg
                                        </option>
                                        <option value="Knowlton Hall (New Students Orientation & Parent Services), 691 N PLEASANT ST OFC, AMHERST, MA 01003-9399">
                                            Knowlton Hall (New Students Orientation & Parent Services)
                                        </option>
                                        <option value="Lederle Grad Research Ctr (LGRC lowrise), 740 N PLEASANT ST, AMHERST, MA 01003-9306">
                                            Lederle Grad Research Ctr (LGRC lowrise)
                                        </option>
                                        <option value="Lederle Grad Research Tower (LGRT), 710 N PLEASANT ST, AMHERST, MA 01003-9305">
                                            Lederle Grad Research Tower (LGRT)
                                        </option>
                                        <option value="Life Sciences Laboratories, 240 THATCHER RD, AMHERST, MA 01003-9364">
                                            Life Sciences Laboratories
                                        </option>
                                        <option value="Machmer Hall, 240 HICKS WAY, AMHERST, MA 01003-9278">
                                            Machmer Hall
                                        </option>
                                        <option value="Marcus Hall, 100 NATURAL RESOURCES RD, AMHERST, MA 01003-9292">
                                            Marcus Hall
                                        </option>
                                        <option value="Marston Hall, 130 NATURAL RESOURCES RD, AMHERST, MA 01003-9293">
                                            Marston Hall
                                        </option>
                                        <option value="Mass Ventures, 100 VENTURE WAY, HADLEY, MA 01035-9462">
                                            Mass Ventures
                                        </option>
                                        <option value="Mather Building, 37 MATHER DR, AMHERST, MA 01003-9291">
                                            Mather Building
                                        </option>
                                        <option value="Memorial Hall, 134 HICKS WAY, AMHERST, MA 01003-9270">
                                            Memorial Hall
                                        </option>
                                        <option value="Middlesex House, 111 COUNTY CIR, AMHERST, MA 01003-9255">
                                            Middlesex House
                                        </option>
                                        <option value="Montague House, 809 N PLEASANT ST, AMHERST, MA 01003-9307">
                                            Montague House
                                        </option>
                                        <option value="Morrill 1, 637 N PLEASANT ST, AMHERST, MA 01003-9298">
                                            Morrill 1
                                        </option>
                                        <option value="Morrill 2, 627 N PLEASANT ST, AMHERST, MA 01003-9354">
                                            Morrill 2
                                        </option>
                                        <option value="Morrill 3, 611 N PLEASANT ST, AMHERST, MA 01003-9297">
                                            Morrill 3
                                        </option>
                                        <option value="Morrill 4, 639 N PLEASANT ST, AMHERST, MA 01003-9298">
                                            Morrill 4
                                        </option>
                                        <option value="Mullins Center, 200 COMMONWEALTH AVE, AMHERST, MA 01003-9254">
                                            Mullins Center
                                        </option>
                                        <option value="Munson Hall, 101 HICKS WAY, AMHERST, MA 01003-9268">
                                            Munson Hall
                                        </option>
                                        <option value="Nelson House, 513 EAST PLEASANT ST, AMHERST, MA 01003-9260">
                                            Nelson House
                                        </option>
                                        <option value="Nelson House II, 505 EAST PLEASANT ST, AMHERST, MA 01003-9259">
                                            Nelson House II
                                        </option>
                                        <option value="New Africa House, 180 INFIRMARY WAY, AMHERST, MA 01003-9289">
                                            New Africa House
                                        </option>
                                        <option value="Old Chapel, 144 HICKS WAY, AMHERST, MA 01003-9273">
                                            Old Chapel
                                        </option>
                                        <option value="Paige Laboratory, 161 HOLDSWORTH WAY, AMHERST, MA 01003-9286">
                                            Paige Laboratory
                                        </option>
                                        <option value="Parking Office Trailer, 51 FORESTRY WAY, AMHERST, MA 01003-9262">
                                            Parking Office Trailer
                                        </option>
                                        <option value="Parks Marching Band Building, 110 GRINNELL WAY, AMHERST, MA 01003-9365">
                                            Parks Marching Band Building
                                        </option>
                                        <option value="Photo Center, 211 HICKS WAY, AMHERST, MA 01003-9372">
                                            Photo Center
                                        </option>
                                        <option value="Physical Plant, 360 CAMPUS CENTER WAY, AMHERST, MA 01003-9248">
                                            Physical Plant
                                        </option>
                                        <option value="Police Station, 585 EAST PLEASANT ST, AMHERST, MA 01003-9600">
                                            Police Station
                                        </option>
                                        <option value="Recreation Center, 161 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Recreation Center
                                        </option>
                                        <option value="Research Administration, 70 BUTTERFIELD TERR, AMHERST, MA 01003-9242">
                                            Research Administration
                                        </option>
                                        <option value="Renaissance Center, 650 E PLEASANT ST, AMHERST, MA 01002-1526">
                                            Renaissance Center
                                        </option>
                                        <option value="Robsham Visitor's Center, 300 MASSACHUSETTS AVE, AMHERST, MA 01003-9290">
                                            Robsham Visitor's Center
                                        </option>
                                        <option value="Shade Trees Laboratory, 245 STOCKBRIDGE RD, AMHERST, MA 01003-9318">
                                            Shade Trees Laboratory
                                        </option>
                                        <option value="Skinner Hall, 651 N PLEASANT ST, AMHERST, MA 01003-9299">
                                            Skinner Hall
                                        </option>
                                        <option value="Slobody Bldg, 101 UNIVERSITY DR SUITE B, AMHERST, MA 01002-2376">
                                            Slobody Bldg
                                        </option>
                                        <option value="Slobody Bldg, 101 UNIVERSITY DR SUITE C, AMHERST, MA 01002-2385">
                                            Slobody Bldg
                                        </option>
                                        <option value="South College, 150 HICKS WAY, AMHERST, MA 01003-9274">
                                            South College
                                        </option>
                                        <option value="Stonewall Center, 256 SUNSET AVE OFC, AMHERST, MA 01003-9232">
                                            Stonewall Center
                                        </option>
                                        <option value="Stockbridge Hall, 80 CAMPUS CENTER WAY, AMHERST, MA 01003-9246">
                                            Stockbridge Hall
                                        </option>
                                        <option value="Student Union, 41 CAMPUS CENTER WAY, AMHERST, MA 01003-9245">
                                            Student Union
                                        </option>
                                        <option value="Studio Arts Building, 110 THATCHER RD, AMHERST, MA 01003-9356">
                                            Studio Arts Building
                                        </option>
                                        <option value="Thompson Hall, 200 HICKS WAY, AMHERST, MA 01003-9277">
                                            Thompson Hall
                                        </option>
                                        <option value="Thoreau House (offices), 640 MASSACHUSETTS AVE OFC, AMHERST, MA 01003-9327">
                                            Thoreau House (offices)
                                        </option>
                                        <option value="Tillson House, 23 TILLSON FARM RD, AMHERST, MA 01003-9346">
                                            Tillson House
                                        </option>
                                        <option value="Tillson Farm, 151 TILLSON FARM RD, AMHERST, MA, 1003">
                                            Tillson Farm
                                        </option>
                                        <option value="Tobin Hall, 135 HICKS WAY, AMHERST, MA 01003-9271">
                                            Tobin Hall
                                        </option>
                                        <option value="Toddler House, 21 CLUBHOUSE DR, AMHERST, MA 01003-9343">
                                            Toddler House
                                        </option>
                                        <option value="Totman Bldg, 30 EASTMAN LN, AMHERST, MA 01003-9258">
                                            Totman Bldg
                                        </option>
                                        <option value="University Bus Garage, 255 GOVERNORS DR, AMHERST, MA 01003-9266">
                                            University Bus Garage
                                        </option>
                                        <option value="University Press, 671 N PLEASANT ST, AMHERST, MA 01003-9301">
                                            University Press
                                        </option>
                                        <option value="University Store, 1 CAMPUS CENTER WAY OFC, AMHERST, MA 01003-9332">
                                            University Store
                                        </option>
                                        <option value="W.E.B. Du Bois Library, 154 HICKS WAY, AMHERST, MA 01003-9275">
                                            W.E.B. Du Bois Library
                                        </option>
                                        <option value="West Experiment Station, 682 N PLEASANT ST, AMHERST, MA 01003-9302">
                                            West Experiment Station
                                        </option>
                                        <option value="Whitmore Bldg, 181 PRESIDENTS DR, AMHERST, MA 01003-9313">
                                            Whitmore Bldg
                                        </option>
                                        <option value="Wilder Hall, 221 STOCKBRIDGE RD, AMHERST, MA 01003-9315">
                                            Wilder Hall
                                        </option>
                                        <option value="Worcester Dining Commons, 669 N PLEASANT ST, AMHERST, MA 01003-9301">
                                            Worcester Dining Commons
                                        </option>
                                        <option value="Wysocki House, 911 N PLEASANT ST, AMHERST, MA 01003-9309">
                                            Wysocki House
                                        </option>
                                        <option value="Baker Hall, 160 CLARK HILL RD, AMHERST, MA 01003-9205">
                                            Baker Hall
                                        </option>
                                        <option value="Birch Hall, 153 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Birch Hall
                                        </option>
                                        <option value="Brett Hall, 151 INFIRMARY WAY, AMHERST, MA 01003-9219">
                                            Brett Hall
                                        </option>
                                        <option value="Brooks Hall, 160 INFIRMARY WAY, AMHERST, MA 01003-9200">
                                            Brooks Hall
                                        </option>
                                        <option value="Brown Hall, 92 EASTMAN LN, AMHERST, MA 01003-9210">
                                            Brown Hall
                                        </option>
                                        <option value="Butterfield Hall, 171 CLARK HILL RD, AMHERST, MA 01003-9206">
                                            Butterfield Hall
                                        </option>
                                        <option value="Cance Hall, 191 FEARING ST, AMHERST, MA 01003-9218">
                                            Cance Hall
                                        </option>
                                        <option value="Cashin Hall, 112 EASTMAN LN, AMHERST, MA 01003-9220">
                                            Cashin Hall
                                        </option>
                                        <option value="Chadbourne Hall, 110 ORCHARD HILL DR, AMHERST, MA 01003-9207">
                                            Chadbourne Hall
                                        </option>
                                        <option value="Coolidge Hall, 630 MASSACHUSETTS AVE, AMHERST, MA 01003-9239">
                                            Coolidge Hall
                                        </option>
                                        <option value="Crabtree Hall, 17 EASTMAN LN, AMHERST, MA 01003-9226">
                                            Crabtree Hall
                                        </option>
                                        <option value="Crampton Hall, 256 SUNSET AVE, AMHERST, MA 01003-9232">
                                            Crampton Hall
                                        </option>
                                        <option value="Dickinson Hall, 151 ORCHARD HILL DR, AMHERST, MA 01003-9222">
                                            Dickinson Hall
                                        </option>
                                        <option value="Dwight Hall, 41 EASTMAN LN, AMHERST, MA 01003-9228">
                                            Dwight Hall
                                        </option>
                                        <option value="Elm Hall, 145 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Elm Hall
                                        </option>
                                        <option value="Emerson Hall, 151 SOUTHWEST CIR, AMHERST, MA 01003-9237">
                                            Emerson Hall
                                        </option>
                                        <option value="Field Hall, 171 ORCHARD HILL DR, AMHERST, MA 01003-9225">
                                            Field Hall
                                        </option>
                                        <option value="Gorman Hall, 90 BUTTERFIELD TER, AMHERST, MA 01003-9202">
                                            Gorman Hall
                                        </option>
                                        <option value="Grayson Hall, 161 ORCHARD HILL DR, AMHERST, MA 01003-9221">
                                            Grayson Hall
                                        </option>
                                        <option value="Greenough Hall, 120 ORCHARD HILL DR, AMHERST, MA 01003-9224">
                                            Greenough Hall
                                        </option>
                                        <option value="Hamlin Hall, 739 N PLEASANT ST, AMHERST, MA 01003-9211">
                                            Hamlin Hall
                                        </option>
                                        <option value="James Hall, 660 MASSACHUSETTS AVE, AMHERST, MA 01003-9217">
                                            James Hall
                                        </option>
                                        <option value="John Adams Hall, 161 FEARING ST, AMHERST, MA 01003-9234">
                                            John Adams Hall
                                        </option>
                                        <option value="John Quincy Adams Hall, 171 FEARING ST, AMHERST, MA 01003-9235">
                                            John Quincy Adams Hall
                                        </option>
                                        <option value="Johnson Hall, 380 THATCHER RD, AMHERST, MA 01003-9359">
                                            Johnson Hall
                                        </option>
                                        <option value="Kennedy Hall, 620 MASSACHUSETTS AVE, AMHERST, MA 01003-9238">
                                            Kennedy Hall
                                        </option>
                                        <option value="Knowlton Hall, 691 N PLEASANT ST, AMHERST, MA 01003-9212">
                                            Knowlton Hall
                                        </option>
                                        <option value="Leach Hall, 21 EASTMAN LN, AMHERST, MA 01003-9227">
                                            Leach Hall
                                        </option>
                                        <option value="Lewis Hall, 340 THATCHER RD, AMHERST, MA 01003-9359">
                                            Lewis Hall
                                        </option>
                                        <option value="Lincoln Apts, 345 LINCOLN AVE, AMHERST, MA 01003-9373">
                                            Lincoln Apts
                                        </option>
                                        <option value="Linden Hall, 141 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Linden Hall
                                        </option>
                                        <option value="Mackimmie Hall, 230 SUNSET AVE, AMHERST, MA 01003-9231">
                                            Mackimmie Hall
                                        </option>
                                        <option value="Maple Hall, 151 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Maple Hall
                                        </option>
                                        <option value="Mary Lyon Hall, 43 EASTMAN LN, AMHERST, MA 01003-9208">
                                            Mary Lyon Hall
                                        </option>
                                        <option value="McNamara Hall, 102 EASTMAN LN, AMHERST, MA 01003-9203">
                                            McNamara Hall
                                        </option>
                                        <option value="Melville Hall, 650 MASSACHUSETTS AVE, AMHERST, MA 01003-9241">
                                            Melville Hall
                                        </option>
                                        <option value="Moore Hall, 111 SOUTHWEST CIR, AMHERST, MA 01003-9216">
                                            Moore Hall
                                        </option>
                                        <option value="North Residence A, 56 EASTMAN LN, AMHERST, MA 01003-9350">
                                            North Residence A
                                        </option>
                                        <option value="North Residence B, 58 EASTMAN LN, AMHERST, MA 01003-9351">
                                            North Residence B
                                        </option>
                                        <option value="North Residence C, 54 EASTMAN LN, AMHERST, MA 01003-9349">
                                            North Residence C
                                        </option>
                                        <option value="North Residence D, 52 EASTMAN LN, AMHERST, MA 01003-9348">
                                            North Residence D
                                        </option>
                                        <option value="North Village Apts. (family housing), 990 N PLEASANT ST, AMHERST, MA, 1002">
                                            North Village Apts. (family housing)
                                        </option>
                                        <option value="Oak Hall, 143 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Oak Hall
                                        </option>
                                        <option value="Patterson Hall, 204 SUNSET AVE, AMHERST, MA 01003-9213">
                                            Patterson Hall
                                        </option>
                                        <option value="Pierpont Hall, 201 FEARING ST, AMHERST, MA 01003-9215">
                                            Pierpont Hall
                                        </option>
                                        <option value="Prince Hall, 286 SUNSET AVE, AMHERST, MA 01003-9233">
                                            Prince Hall
                                        </option>
                                        <option value="Sycamore Hall, 159 COMMONWEALTH AVE, AMHERST, MA 01003-9253">
                                            Sycamore Hall
                                        </option>
                                        <option value="Thatcher Hall, 300 THATCHER RD, AMHERST, MA 01003-9359">
                                            Thatcher Hall
                                        </option>
                                        <option value="Thoreau Hall, 640 MASSACHUSETTS AVE, AMHERST, MA 01003-9240">
                                            Thoreau Hall
                                        </option>
                                        <option value="Van Meter Hall, 180 CLARK HILL RD, AMHERST, MA 01003-9223">
                                            Van Meter Hall
                                        </option>
                                        <option value="Washington Hall, 181 FEARING ST, AMHERST, MA 01003-9236">
                                            Washington Hall
                                        </option>
                                        <option value="Webster Hall, 141 ORCHARD HILL DR, AMHERST, MA 01003-9204">
                                            Webster Hall
                                        </option>
                                        <option value="Wheeler Hall,171 INFIRMARY WAY, AMHERST, MA 01003-9201">
                                            Wheeler Hall
                                        </option>
                                    </select>
                                  </div>
                                  <div className="form-group ">
                                      <input className="form-control input-lg" id="text" name="text" placeholder="Enter custom address here" type="text" />
                                  </div>
                              </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <Footer currentPage={this.props.currentPage} switch={this.handleSwitch}/>
      </div>
    );
  }
}
module.exports = DropOff;
