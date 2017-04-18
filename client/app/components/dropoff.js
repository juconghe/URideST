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
                                        <option>
                                            Agricultural Engineering Bldg
                                        </option>
                                        <option>
                                            Agricultural Experiment Station (Alterations)
                                        </option>
                                        <option>
                                            Army ROTC Bldg
                                        </option>
                                        <option>
                                            Arnold House
                                        </option>
                                        <option>
                                            (Studio) Arts Building
                                        </option>
                                        <option>
                                            Auxiliary Services Warehouse
                                        </option>
                                        <option>
                                            Baker House (offices)
                                        </option>
                                        <option>
                                            Bartlett Hall
                                        </option>
                                        <option>
                                            Berkshire House
                                        </option>
                                        <option>
                                            Berkshire Dining Common
                                        </option>
                                        <option>
                                            Blaisdell
                                        </option>
                                        <option>
                                            Bowditch Hall
                                        </option>
                                        <option>
                                            Bowditch Lodge
                                        </option>
                                        <option>
                                            Boyden
                                        </option>
                                        <option>
                                            Brett (Offices)
                                        </option>
                                        <option>
                                            Campus Center
                                        </option>
                                        <option>
                                            Cance (offices)
                                        </option>
                                        <option>
                                            Central Heating Plant
                                        </option>
                                        <option>
                                            Champions Center
                                        </option>
                                        <option>
                                            Chancellor's House
                                        </option>
                                        <option>
                                            Chenoweth Laboratory
                                        </option>
                                        <option>
                                            Clark Hall
                                        </option>
                                        <option>
                                            (William S.) Clark International Center (Hills)
                                        </option>
                                        <option>
                                            Commonwealth Honors College
                                        </option>
                                        <option>
                                            Communication Disorders
                                        </option>
                                        <option>
                                            Computer Science Bldg
                                        </option>
                                        <option>
                                            Condensate Storage Building
                                        </option>
                                        <option>
                                            Conte Polymer Center
                                        </option>
                                        <option>
                                            Continuing Education
                                        </option>
                                        <option>
                                            Crotty Hall
                                        </option>
                                        <option>
                                            Curry Hicks
                                        </option>
                                        <option>
                                            Design Building
                                        </option>
                                        <option>
                                            Dickinson Hall
                                        </option>
                                        <option>
                                            Draper Hall
                                        </option>
                                        <option>
                                            East Experiment Station
                                        </option>
                                        <option>
                                            Engineering Laboratory
                                        </option>
                                        <option>
                                            Engineering Laboratory II (E Lab II)
                                        </option>
                                        <option>
                                            Faculty Club
                                        </option>
                                        <option>
                                            Farley Lodge
                                        </option>
                                        <option>
                                            Fernald Hall
                                        </option>
                                        <option>
                                            Fine Arts Center (East)
                                        </option>
                                        <option>
                                            Fine Arts Center (West)
                                        </option>
                                        <option>
                                            Flint Laboratory
                                        </option>
                                        <option>
                                            Football Performance Center
                                        </option>
                                        <option>
                                            Franklin Dining Common
                                        </option>
                                        <option>
                                            French Hall
                                        </option>
                                        <option>
                                            Furcolo Hall
                                        </option>
                                        <option>
                                            Goessmann Laboratory
                                        </option>
                                        <option>
                                            Goodell Bldg
                                        </option>
                                        <option>
                                            Goodell Bldg (Graduate School)
                                        </option>
                                        <option>
                                            Goodell Bldg (Procurement)
                                        </option>
                                        <option>
                                            Gordon Hall
                                        </option>
                                        <option>
                                            Gunness Lab
                                        </option>
                                        <option>
                                            Hampden Dining Common
                                        </option>
                                        <option>
                                            Hampshire Dining Common
                                        </option>
                                        <option>
                                            Hampshire House
                                        </option>
                                        <option>
                                            Hasbrouck Laboratory
                                        </option>
                                        <option>
                                            Hatch Laboratory
                                        </option>
                                        <option>
                                            Health Center
                                        </option>
                                        <option>
                                            Herter Hall
                                        </option>
                                        <option>
                                            Hillel House
                                        </option>
                                        <option>
                                            Hills North
                                        </option>
                                        <option>
                                            Hills South
                                        </option>
                                        <option>
                                            Holdsworth Hall
                                        </option>
                                        <option>
                                            Institute for Holocaust
                                        </option>
                                        <option>
                                            Isenberg School of Management
                                        </option>
                                        <option>
                                            Integrated Science Building
                                        </option>
                                        <option>
                                            Integrative Learning Center
                                        </option>
                                        <option>
                                            John Quincy Adams Tower
                                        </option>
                                        <option>
                                            Johnson House (offices)
                                        </option>
                                        <option>
                                            Knowles Engineering Bldg
                                        </option>
                                        <option>
                                            Knowlton Hall (New Students Orientation & Parent Services)
                                        </option>
                                        <option>
                                            Lederle Grad Research Ctr (LGRC lowrise)
                                        </option>
                                        <option>
                                            Lederle Grad Research Tower (LGRT)
                                        </option>
                                        <option>
                                            Life Sciences Laboratories
                                        </option>
                                        <option>
                                            Machmer Hall
                                        </option>
                                        <option>
                                            Marcus Hall
                                        </option>
                                        <option>
                                            Marston Hall
                                        </option>
                                        <option>
                                            Mass Ventures
                                        </option>
                                        <option>
                                            Mather Building
                                        </option>
                                        <option>
                                            Memorial Hall
                                        </option>
                                        <option>
                                            Middlesex House
                                        </option>
                                        <option>
                                            Montague House
                                        </option>
                                        <option>
                                            Morrill 1
                                        </option>
                                        <option>
                                            Morrill 2
                                        </option>
                                        <option>
                                            Morrill 3
                                        </option>
                                        <option>
                                            Morrill 4
                                        </option>
                                        <option>
                                            Mullins Center
                                        </option>
                                        <option>
                                            Munson Hall
                                        </option>
                                        <option>
                                            Nelson House
                                        </option>
                                        <option>
                                            Nelson House II
                                        </option>
                                        <option>
                                            New Africa House
                                        </option>
                                        <option>
                                            Old Chapel
                                        </option>
                                        <option>
                                            Paige Laboratory
                                        </option>
                                        <option>
                                            Parking Office Trailer
                                        </option>
                                        <option>
                                            Parks Marching Band Building
                                        </option>
                                        <option>
                                            Photo Center
                                        </option>
                                        <option>
                                            Physical Plant
                                        </option>
                                        <option>
                                            Police Station
                                        </option>
                                        <option>
                                            Recreation Center
                                        </option>
                                        <option>
                                            Research Administration
                                        </option>
                                        <option>
                                            Renaissance Center
                                        </option>
                                        <option>
                                            Robsham Visitor's Center
                                        </option>
                                        <option>
                                            Shade Trees Laboratory
                                        </option>
                                        <option>
                                            Skinner Hall
                                        </option>
                                        <option>
                                            Slobody Bldg
                                        </option>
                                        <option>
                                            Slobody Bldg
                                        </option>
                                        <option>
                                            South College
                                        </option>
                                        <option>
                                            Stonewall Center
                                        </option>
                                        <option>
                                            Stockbridge Hall
                                        </option>
                                        <option>
                                            Student Union
                                        </option>
                                        <option>
                                            Studio Arts Building
                                        </option>
                                        <option>
                                            Thompson Hall
                                        </option>
                                        <option>
                                            Thoreau House (offices)
                                        </option>
                                        <option>
                                            Tillson House
                                        </option>
                                        <option>
                                            Tillson Farm
                                        </option>
                                        <option>
                                            Tobin Hall
                                        </option>
                                        <option>
                                            Toddler House
                                        </option>
                                        <option>
                                            Totman Bldg
                                        </option>
                                        <option>
                                            University Bus Garage
                                        </option>
                                        <option>
                                            University Press
                                        </option>
                                        <option>
                                            University Store
                                        </option>
                                        <option>
                                            W.E.B. Du Bois Library
                                        </option>
                                        <option>
                                            West Experiment Station
                                        </option>
                                        <option>
                                            Whitmore Bldg
                                        </option>
                                        <option>
                                            Wilder Hall
                                        </option>
                                        <option>
                                            Worcester Dining Commons
                                        </option>
                                        <option>
                                            Wysocki House
                                        </option>
                                        <option>
                                            Baker Hall
                                        </option>
                                        <option>
                                            Birch Hall
                                        </option>
                                        <option>
                                            Brett Hall
                                        </option>
                                        <option>
                                            Brooks Hall
                                        </option>
                                        <option>
                                            Brown Hall
                                        </option>
                                        <option>
                                            Butterfield Hall
                                        </option>
                                        <option>
                                            Cance Hall
                                        </option>
                                        <option>
                                            Cashin Hall
                                        </option>
                                        <option>
                                            Chadbourne Hall
                                        </option>
                                        <option>
                                            Coolidge Hall
                                        </option>
                                        <option>
                                            Crabtree Hall
                                        </option>
                                        <option>
                                            Crampton Hall
                                        </option>
                                        <option>
                                            Dickinson Hall
                                        </option>
                                        <option>
                                            Dwight Hall
                                        </option>
                                        <option>
                                            Elm Hall
                                        </option>
                                        <option>
                                            Emerson Hall
                                        </option>
                                        <option>
                                            Field Hall
                                        </option>
                                        <option>
                                            Gorman Hall
                                        </option>
                                        <option>
                                            Grayson Hall
                                        </option>
                                        <option>
                                            Greenough Hall
                                        </option>
                                        <option>
                                            Hamlin Hall
                                        </option>
                                        <option>
                                            James Hall
                                        </option>
                                        <option>
                                            John Adams Hall
                                        </option>
                                        <option>
                                            John Quincy Adams Hall
                                        </option>
                                        <option>
                                            Johnson Hall
                                        </option>
                                        <option>
                                            Kennedy Hall
                                        </option>
                                        <option>
                                            Knowlton Hall
                                        </option>
                                        <option>
                                            Leach Hall
                                        </option>
                                        <option>
                                            Lewis Hall
                                        </option>
                                        <option>
                                            Lincoln Apts
                                        </option>
                                        <option>
                                            Linden Hall
                                        </option>
                                        <option>
                                            Mackimmie Hall
                                        </option>
                                        <option>
                                            Maple Hall
                                        </option>
                                        <option>
                                            Mary Lyon Hall
                                        </option>
                                        <option>
                                            McNamara Hall
                                        </option>
                                        <option>
                                            Melville Hall
                                        </option>
                                        <option>
                                            Moore Hall
                                        </option>
                                        <option>
                                            North Residence A
                                        </option>
                                        <option>
                                            North Residence B
                                        </option>
                                        <option>
                                            North Residence C
                                        </option>
                                        <option>
                                            North Residence D
                                        </option>
                                        <option>
                                            North Village Apts. (family housing)
                                        </option>
                                        <option>
                                            Oak Hall
                                        </option>
                                        <option>
                                            Patterson Hall
                                        </option>
                                        <option>
                                            Pierpont Hall
                                        </option>
                                        <option>
                                            Prince Hall
                                        </option>
                                        <option>
                                            Sycamore Hall
                                        </option>
                                        <option>
                                            Thatcher Hall
                                        </option>
                                        <option>
                                            Thoreau Hall
                                        </option>
                                        <option>
                                            Van Meter Hall
                                        </option>
                                        <option>
                                            Washington Hall
                                        </option>
                                        <option>
                                            Webster Hall
                                        </option>
                                        <option>
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
