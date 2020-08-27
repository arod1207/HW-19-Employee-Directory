import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

import Employees from './Employees';

function SearchBar() {
    // setEmployees was used to get the data from the api and set the data in the employees state //
    const [employees, setEmployees] = useState([]);
    // setSearch was started as a empty string and used run in the input to recieve the value of the input and store it in the search //
    const [search, setSearch] = useState('');

    // useEffect was left with only the search  so the api call would only be made during a search //
    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?nat=us&results=20&seed=foobar')
            .then((res) => {
                setEmployees(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [search]);

    // setup a filter method to loop through the setState from employees and then set everything to lowercase, passed in the search from setState //
    const filter = employees.filter((employee) => {
        return employee.name.first.toLowerCase().includes(search.toLowerCase());
    });

    // passed the filter variable into the map method then added props to render the Employee Component //
    const employeeComponent = filter.map((people) => (
        <Employees key={people.name.first} people={people} />
    ));

    const alphaOrder = () =>
        employees.sort(function (a, b) {
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        });

    return (
        <div>
            <div className="jumbotron search-bar">
                <h1 className="title">Employee Directory</h1>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Search"
                        // created an onChange event to handle the setSearch, then setSearch passes the value to search
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                </div>
                <button className="btn btn-primary" onClick={alphaOrder}>
                    Sort Names in Alpha Order
                </button>
            </div>

            {/* Past in the employeeComponent variable created with the map method  */}
            {employeeComponent}
        </div>
    );
}

export default SearchBar;
