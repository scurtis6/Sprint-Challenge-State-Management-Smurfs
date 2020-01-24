// reducers index
import { FETCHING_SMURF } from '../actions';
import { FETCHING_SMURF_SUCCESS } from '../actions';
import { FETCHING_SMURF_FAILURE } from '../actions';

const initialState = {
    smurf: [],
    isFetching: false,
    error: ''
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurf: action.payload
            };
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            };
        default:
            return state;
    }
};

export default smurfReducer;