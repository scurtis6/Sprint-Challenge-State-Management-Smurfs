// reducers index
import { FETCHING_SMURF, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE } from '../actions';
import { POST_SMURF, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from '../actions';
;


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
        case POST_SMURF:
            return {
                ...state,
                isFetching: true
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurf: action.payload
            };
        case POST_SMURF_FAILURE:
            return {
                ...state,
                isFetching: true,
                err: action.payload
            };
        default:
            return state;
    }
};

export default smurfReducer;