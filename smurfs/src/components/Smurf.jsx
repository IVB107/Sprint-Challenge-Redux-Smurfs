import React from 'react';
import styled from 'styled-components';

const SmurfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    border: 2px solid blue;
    background-color: cornflowerblue;
    width: 300px;

    > p {
        margin: 10px;
    }
`;

const Smurf = props => {
    return (
        <SmurfContainer>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </SmurfContainer>
    )
}

export default Smurf;