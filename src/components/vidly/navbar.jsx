import React, {Component} from 'react';

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
                            Version: 03
                        </a>
                    </h1>

                    <h1 className="navbar-brand d-flex justify-content-center">
                        <a
                            className='mr-2 text-muted'
                            href="https://tinyurl.com/35mpam88"
                            target='_blank'
                        >
                            Diagram
                        </a>
                        ||
                        <a
                            className='ml-2 mr-2 text-muted'
                            href="https://tinyurl.com/4mkcbyyc"
                            target='_blank'
                        >
                            Workflow
                        </a>
                        ||
                        <a
                            className='ml-2 text-muted'
                            href="https://tinyurl.com/49phmn4r"
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