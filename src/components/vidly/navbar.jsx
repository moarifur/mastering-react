import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">
                        Project02: Vidly App |
                        <a
                            className='ml-2 text-info'
                            href="#"
                            target='_blank'
                        >
                            Version: 01
                        </a>
                    </h1>

                    <h1 className="navbar-brand d-flex justify-content-center">
                        <a
                            className='mr-2 text-muted'
                            href="#"
                            target='_blank'
                        >
                            Diagram
                        </a>
                        ||
                        <a
                            className='ml-2 mr-2 text-muted'
                            href="#"
                            target='_blank'
                        >
                            Workflow
                        </a>
                        ||
                        <a
                            className='ml-2 text-muted'
                            href="#"
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