import React from 'react';

function Employees(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <img src={props.people.picture.large} alt="..." />
                    <h3>
                        {props.people.name.first} {props.people.name.last}
                    </h3>
                    <h4>
                        Email: {props.people.email} <br />
                        Age: {props.people.dob.age}
                    </h4>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Employees;
