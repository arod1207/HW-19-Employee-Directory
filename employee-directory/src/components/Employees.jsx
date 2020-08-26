import React from 'react';

function Employees(props) {
    console.log('Props CL for Employees', props);

    return (
        <>
            <h3>
                {props.people.name.first} {props.people.name.last}{' '}
                {props.people.email} {props.people.dob.age}
            </h3>
            <img src={props.people.picture.thumbnail} alt="" />
        </>
    );
}

export default Employees;
