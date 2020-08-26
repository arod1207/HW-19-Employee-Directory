import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

import Employees from './Employees';

function SearchBar() {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?nat=us&results=10&seed=foobar')
            .then((res) => {
                setEmployees(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredEmployees = employees.filter((employee) => {
        return employee.name;
    });

    const employeeComponent = filteredEmployees.map((people) => (
        <Employees key={people.name.first} people={people} />
    ));

    return (
        <div>
            <div className="jumbotron search-bar">
                <h1 className="title">Employee Directory</h1>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                </div>
            </div>
            {employeeComponent}
        </div>
    );
}

export default SearchBar;
