import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    // componentDidMount = () => {
    //     console.log('Inside SmurfForm CDM');
    //     this.props.fetchSmurfs();
    // }

    handleChange = e => {

        console.log(e.target.value);

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('inside handle submit smurf')
        // this.props.addSmurf(this.state)
    }

    render(){
        return (
            <div>
                <form action="submit">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="height"
                        placeholder="Height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

// mapStateToProps = state => {
//     return {

//     }
// }

export default connect(null, { addSmurf })(SmurfForm)