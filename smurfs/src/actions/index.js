// actions index
import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';
export const POST_SMURF = 'POST_SMURF';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response })
    });

};

export const addSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POST_SMURF });
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then (res => {
        console.log(res);
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: POST_SMURF_FAILURE, payload: err.response})
    });
}