import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

import Employees from './Employees';

function SearchBar() {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/')
            .then((res) => {
                setEmployees(res.data);
                console.log(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="jumbotron search-bar">
                <h1 style={{ textAlign: 'center' }}>Employee Directory</h1>
                {search}
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                ></input>
            </div>
            <div></div>
        </div>
    );
}

export default SearchBar;
