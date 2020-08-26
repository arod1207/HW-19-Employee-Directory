import React, { useState } from 'react';
import '../App.css';
import Employees from './Employees';

function SearchBar() {
    const [employee, setEmployee] = useState('');

    const getEmployee = (e) => {
        setEmployee(e.target.value);
    };

    return (
        <div>
            <div className="jumbotron search-bar">
                <h1 style={{ textAlign: 'center' }}>Employee Directory</h1>
                <form onSubmit={getEmployee} className="form">
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control"
                            name="employee"
                            onChange={getEmployee}
                        />
                    </div>
                </form>
            </div>
            <div>
                <Employees employee={employee} />
            </div>
        </div>
    );
}

export default SearchBar;
