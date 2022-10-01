import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">
                        <a
                            className='mr-2 text-info'
                            href="https://rococo-profiterole-656cf8.netlify.app/"
                            target='_blank'
                        >
                            Project02: Vidly App
                        </a>
                         ||
                        <a
                            className='ml-2 text-info'
                            href="https://tinyurl.com/23r5ran7"
                            target='_blank'
                        >
                            Version: 01
                        </a>
                    </h1>

                    <h1 className="navbar-brand d-flex justify-content-center">
                        <a
                            className='mr-2 text-muted'
                            href="https://tinyurl.com/7b8dt6s3"
                            target='_blank'
                        >
                            Diagram
                        </a>
                        ||
                        <a
                            className='ml-2 mr-2 text-muted'
                            href="https://tinyurl.com/3j2ay68c"
                            target='_blank'
                        >
                            Workflow
                        </a>
                        ||
                        <a
                            className='ml-2 text-muted'
                            href="https://tinyurl.com/jbu6nrk6"
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