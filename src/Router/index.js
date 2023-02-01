import React, { Component } from 'react';
import TableRow from './table';
import axios from 'axios';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {persons: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/persons')
            .then(response => {
                console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.persons.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render(){
    return(
        <div>
                    <table style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Age</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {()=>{this.tabRow()}}
                    </tbody>
                </table>
        </div>
     
    )
    }
}

