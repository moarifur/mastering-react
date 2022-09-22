import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        const { counters, totalCount } = this.props
        if(counters.length === 0) return null
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">
                        { `Total Items ` }
                        <span className="badge badge-secondary badge-pill ml-1">
                            { totalCount }
                        </span>
                    </h1>
                    <h1 className="navbar-brand d-flex justify-content-center">
                        Project01: Counter App |
                        <a
                            className='ml-2 text-success'
                            href="https://tinyurl.com/yjxye3wa"
                            target='_blank'
                        >
                            Code
                        </a>
                    </h1>
                    <h1 className="navbar-brand d-flex justify-content-center">
                        <a
                            className='text-muted'
                            href="https://tinyurl.com/4vhvyecs"
                            target='_blank'
                        >
                            Project Diagram
                        </a>
                    </h1>
                </div>
            </nav>
        );
    }
}

export default Navbar;
