import React from 'react';
import '../App.css';

// brought in the props from Searchbar //
function Employees(props) {
    return (
        <div className="employee-card">
            <img src={props.people.picture.large} alt="..." />
            <h3>
                {props.people.name.first} {props.people.name.last}
            </h3>
            <h5>
                Email: {props.people.email} <br />
                Phone: {props.people.phone}
            </h5>
        </div>
    );
}

export default Employees;
