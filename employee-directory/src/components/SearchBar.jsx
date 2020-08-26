import React from 'react';
import '../App.css';

function SearchBar() {
    return (
        <div className="jumbotron search-bar">
            <h1 style={{ textAlign: 'center' }}>Employee Directory</h1>
            <form className="form">
                <div className="form-group ">
                    <input type="text" className="form-control" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
