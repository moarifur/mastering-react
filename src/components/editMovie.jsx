import React from 'react';
import {NavLink} from "react-router-dom";

const EditMovie = () => {
    console.log(typeof window.location.pathname)
    return (
        <div className='container text-center mt-5'>
            <div className='text-black-50 font-weight-bold pb-3'>
                <h1>Movie Form {window.location.pathname}</h1>
            </div>
            <NavLink className="btn btn-primary" to="/movies">
                Save
            </NavLink>
        </div>
    );
};

export default EditMovie;