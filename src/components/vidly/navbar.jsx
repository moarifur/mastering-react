import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">
                        Project02: Vidly App
                         ||
                        <a
                            className='ml-2 text-info'
                            href="https://tinyurl.com/32srke4c"
                            target='_blank'
                        >
                            Version: 06
                        </a>
                    </h1>

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
                    </div>

                    <h1 className="navbar-brand d-flex justify-content-center">
                        <a
                            className='mr-2 text-muted'
                            href="https://tinyurl.com/3d8tmury"
                            target='_blank'
                        >
                            Diagram
                        </a>
                        ||
                        <a
                            className='ml-2 mr-2 text-muted'
                            href="https://tinyurl.com/46p6tard"
                            target='_blank'
                        >
                            Workflow
                        </a>
                        ||
                        <a
                            className='ml-2 text-muted'
                            href="https://tinyurl.com/yckcryz4"
                            target='_blank'
                        >
                            Code
                        </a>
                    </h1>
                </div>
            </nav>
        );
    }
}

export default Navbar;