import React from 'react';
import './Header.css'
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img className="logo" src={logo} alt=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <a className="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Donation</a>
                    <a className="nav-link" href="#">Event</a>
                    <a className="nav-link" href="#">Blog</a>
                    <Link to={"/register"}>
                    <a className="nav-link btn btn-primary mr-1 text-light" href="#">Register</a>
                    </Link>
                    <Link to={"/admin"}>
                        <a className="nav-link btn btn-dark text-light" href="#">Admin</a>
                    </Link>
                    
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;