import React from 'react';

const Increment = ({ counter, onIncrement }) => {
    return (
        <button
            className="btn btn-secondary mr-2"
            onClick={() => onIncrement(counter)}
        >
            +
        </button>
    );
};

export default Increment;