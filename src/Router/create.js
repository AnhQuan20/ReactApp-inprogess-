import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            age: '',
            tel:''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeTel(e) {
        this.setState({
            tel: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            age: this.state.age,
            tel: this.state.tel
        };
        axios.post('http://localhost:4000/persons/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            age: '',
            tel: ''
        })
    }

    render() {
        return (
            <div>
                <form action="/action_page.php" onSubmit={this.onSubmit}>
                    <label for="fname">Name</label>
                    <input type="text" placeholder="Your name.." value={this.state.name} onChange={this.onChangeName}/>

                    <label for="Age">Age</label>
                    <input type="text" placeholder="Age.." value={this.state.age} onChange={this.onChangeAge}/>

                    <label for="tel">Tel</label>
                    <input type="tel" placeholder="Tel.."  value={this.state.tel} onChange={this.onChangeTel}/>
                    
                
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}