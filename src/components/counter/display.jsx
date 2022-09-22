import React from 'react';

const Display = ({ value }) => {

    let displayStyle = 'badge badge-'
    displayStyle += (value === 0) ? 'warning' : 'primary'

    const label = (value === 0) ? 'Zero' : ''

    return (
        <h4 className='d-inline'>
            <span className={displayStyle}>{ value || label }</span>
        </h4>
    );
};

export default Display;

/*

<h4 className='d-inline'>
    <span
        className={`mr-4 badge badge-${count === 0 ? 'warning' : 'primary'}`}
    >
        {count}
    </span>
</h4>

*/