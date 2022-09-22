import React from 'react';

const Reset = ({ counters ,onReset }) => {

    return counters.length === 0 ? null : ''

    return (
        <button
            className="btn btn-primary mt-3"
            onClick={onReset}
        >
            Reset
        </button>
    );
};

export default Reset;

// if (counters.length === 0) return 'All Counter has been Deleted!'
// return counters.length === 0 ? 'All Counter has been Deleted!': ''