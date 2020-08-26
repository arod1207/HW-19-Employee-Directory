import React from 'react';

function Employees(props) {
    console.log('Props CL for Employees', props);

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm">
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
        // <div className="card-deck">
        //     <div className="card">
        //         <img
        //             src={props.people.picture.thumbnail}
        //             className="card-img-top"
        //             alt="..."
        //         />
        //         <div className="card-body">
        //             <h5 className="card-title">
        //                 {props.people.name.first} {props.people.name.last}
        //             </h5>
        //             <p className="card-text">
        //                 Email: {props.people.email} <br />
        //                 Age: {props.people.dob.age}
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Employees;
