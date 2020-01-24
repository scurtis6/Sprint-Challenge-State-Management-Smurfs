import React, { useState } from 'react';

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        e.preventDefault();
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form>
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
            </form>
            <button className='submit-btn' type='sumbit'>Create New Smurf</button>
        </div>
    );
};

export default SmurfForm;