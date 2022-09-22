import React from 'react';

const Decrement = ({ counter, onDecrement }) => {

    // let inactive = false
    // if (count < 1) inactive = true

    const inactive = (counter.value < 1) ? true : false

    return (
        <button
            className='btn btn-secondary mr-2'
            onClick={() => onDecrement(counter)}
            disabled={inactive}
        >
            -
        </button>
    );
};

export default Decrement;