import React, {Component} from 'react';
import Navbar from "./navbar";

class MainVidlyApp extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className='container mt-5'>
                    Main Content of Vidly App
                </div>
            </>
        );
    }
}

export default MainVidlyApp;