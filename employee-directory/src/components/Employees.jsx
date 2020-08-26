import React from 'react';

function Employees(props) {
    console.log('Props CL for Employees', props);

    return (
        <div>
            <h3>Name: {props.employee}</h3>
        </div>
    );
}

export default Employees;
