
import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
    axios.get('http://localhost:4000/persons/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}
  render() {

    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.company}
          </td>
          <td>
            {this.props.obj.age}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
}
}



export default TableRow;


