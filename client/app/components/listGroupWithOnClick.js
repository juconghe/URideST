const React = require('react');
import {assignRequest} from '../server';
class ListGroupWithOnClick extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAssignVan(e,request) {
    // this.props.refresh();
    e.preventDefault()
    assignRequest(request,(message)=>{
      console.log(message);
      console.log(this.props.request);
    });
  }

  render() {
    const items = this.props.items;
    return (
      <div>
          {items.map((i)=>
              <a type="button" className="btn btn-raised btn-default btn-block"
                onClick={(e)=>this.handleAssignVan(e,i)} key={i}>
                <span>{i[1]}</span>
                <br/>
                <span href="#">{i[2]}</span>
              </a>
          )}
      </div>
    );
  }
}

module.exports = ListGroupWithOnClick;
