import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const REMOVING_SMURF = 'REMOVING_SMURF';
export const REMOVED_SMURF = 'REMOVED_SMURF';
export const ERROR = 'ERROR';


/*
  For this project you'll need at least 2 action creators for the main portion,
  and 2 more for the stretch problem.
  Be sure to include action types for each type of action creator. Also, be sure to mind
    the "pending" states like, fetching, creating, updating and deleting.
  C - addSmurf
  R - getSmurfs
  U - updateSmurf
  D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('RESOLVED:');
      console.log(res);
      dispatch({ 
        type: FETCHED_SMURFS, 
        payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR });
    })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
      dispatch({ 
        type: ADDED_SMURF, 
        payload: res.data 
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR });
    })
}

export const removeSmurf = (smurfId) => dispatch => {
  dispatch({ type: REMOVING_SMURF });
  axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(res => {
      console.log(res);
      dispatch({ 
        type: REMOVED_SMURF, 
        payload: res.data 
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR })
    })
}