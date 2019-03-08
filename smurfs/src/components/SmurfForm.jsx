import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addSmurf } from '../actions';

const FormContainer = styled.div`
    margin: 20px 0;
`;

class SmurfForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

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
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render(){
        return (
            <FormContainer>
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
            </FormContainer>
        )
    }

}

export default connect(null, { addSmurf })(SmurfForm)