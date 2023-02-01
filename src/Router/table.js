
import React, { Component } from 'react';

 function TableRow(){
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
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );

}

export default TableRow;


