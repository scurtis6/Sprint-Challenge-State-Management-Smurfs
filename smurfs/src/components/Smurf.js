import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';

const Smurf = (props) => {
    console.log(props)
    const pushSmurfs = props.fetchSmurf
    useEffect(() => {
        pushSmurfs()
    }, [pushSmurfs])

    return (
        <div></div>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return({
        smurf: state.smurf,
        error: state.error
    })
}

export default connect(mapStateToProps, { fetchSmurf })(Smurf);