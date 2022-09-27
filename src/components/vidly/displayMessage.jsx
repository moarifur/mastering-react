import React from 'react';

const DisplayMessage = ({ length }) => {

    if(length === 0)
        return <h3>There is no movies in the database</h3>

    return (
        <nav className="navbar navbar-light bg-light mb-2 justify-content-center">
        <span className="navbar-brand mb-0 h1">
          <header className="text-center">
            <span className="fs-4">
                {length} movies in the database
            </span>
          </header>
        </span>
        </nav>
    );
};

export default DisplayMessage;