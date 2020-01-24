import React, { useState } from 'react';

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    return (
        <div>
            <form>
                <input
                type='text'
                name='name'
                placeholder='Enter Name'
                value={newSmurf.name} />
                <input
                type='number'
                name='quantity'
                min='1'
                max='9999'
                placeholder='Enter Age'
                value={newSmurf.age} />
                <input
                type='text'
                name='height'
                placeholder='Enter Height'
                value={newSmurf.height} />
            </form>
            <button className='submit-btn' type='sumbit'>Create New Smurf</button>
        </div>
    );
};

export default SmurfForm;