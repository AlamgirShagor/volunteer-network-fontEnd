import React from 'react';
import './Seadch.css'
const SearchBar = () => {
    return (
        <div className="container bg-light">
            <div className="row py-5">
                <div className="col-6 mx-auto">
                    <h2>I Grow By Helping People In Need.</h2>
                    <form className="d-flex mx-5 px-5">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2  my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;