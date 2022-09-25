import React from 'react';

const Delete = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='btn btn-danger'
        >
            Delete
        </button>
    );
};

export default Delete;