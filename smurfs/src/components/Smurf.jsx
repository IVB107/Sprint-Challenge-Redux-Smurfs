import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { removeSmurf } from '../actions';

const SmurfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    border: 2px solid blue;
    background-color: cornflowerblue;
    width: 300px;

    > p, button {
        margin: 10px;
    }
`;

class Smurf extends Component {

    handleRemoveSmurf = (e) => {
        e.preventDefault();
        console.log(`Firing removeSmurf with id: ${this.props.id}`);
        console.log('props:');
        console.log(this.props);
        this.props.removeSmurf(this.props.id);
    }

    render(){
        return (
            <SmurfContainer>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Height: {this.props.height}</p>
                <button onClick={this.handleRemoveSmurf}>Delete</button>
            </SmurfContainer>
        )
    }    
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default connect(null, { removeSmurf })(Smurf);