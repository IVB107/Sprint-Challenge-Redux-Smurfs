import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SmurfForm from './SmurfForm'
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
*/

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

class App extends Component {

  componentDidMount = () => {
    console.log('Inside App.js CDM');
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <AppContainer>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        {this.props.smurfs.map(smurf => {
          return <Smurf 
                  key={smurf.name}
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                />
        })}
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
