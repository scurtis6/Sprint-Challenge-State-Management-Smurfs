import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = (props) => {
    const dispatch = useDispatch();
    console.log(props)
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
        console.log(e.target)
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addSmurf(newSmurf));
        // props.addSmurf(newSmurf);
        // setNewSmurf({
        //     name: '',
        //     age: '',
        //     height: ''
        // });
;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='name'
                placeholder='Enter Name'
                value={newSmurf.name}
                onChange={handleChanges} />
                <input
                type='text'
                name='age'
                placeholder='Enter Age'
                value={newSmurf.age}
                onChange={handleChanges} />
                <input
                type='text'
                name='height'
                placeholder='Enter Height'
                value={newSmurf.height} 
                onChange={handleChanges} />
                <button className='submit-btn' type='sumbit'>Create New Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;