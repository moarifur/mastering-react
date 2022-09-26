import React from 'react';

const Delete = ({ onClick }) => {
    return (
        <i
            className="fa fa-trash"
            style={{ cursor: 'pointer',color: 'Red'}}
            onClick={onClick}
        />
    );
};

export default Delete;