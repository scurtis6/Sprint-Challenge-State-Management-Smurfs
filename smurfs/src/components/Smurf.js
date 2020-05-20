import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import SmurfForm from './SmurfForm';

const Smurf = (props) => {
    console.log(props)
    const pushSmurfs = props.fetchSmurf
    useEffect(() => {
        pushSmurfs()
    }, [pushSmurfs])

    return (
        <div className="smurf">
            <div className='smurf-content'>
                {props.smurf.map(smurf => (
                    <div className='smurf-data' key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                ))}
            </div>
            <SmurfForm />
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state, state.smurf)
    return({
        smurf: state.smurf,
        error: state.error
    })
}

export default connect(mapStateToProps, { fetchSmurf })(Smurf);