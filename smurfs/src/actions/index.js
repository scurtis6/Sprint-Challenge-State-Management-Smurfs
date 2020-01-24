// actions index
import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response })
    });

};