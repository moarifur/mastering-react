import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/movies">
                            Movies
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/customers">
                            Customers
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                        <NavLink className="nav-item nav-link" to='/login'>
                            Login
                        </NavLink>
                        <NavLink className="nav-item nav-link" to='/register'>
                            Register
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;