import React from 'react';

/*---------------------------------------------------------
* Target: Create a reusable input field with validation
* TODO-1: Use rest parameter - https://tinyurl.com/vn4zt42t
* TODO-2: Conditional rendering for error handling
* --------------------------------------------------------*/

const Input = ({ name, label, error, ...rest }) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input className="form-control"
                   {...rest} // TODO-1
                   name={name}
                   id={name}
            />
            {error && <div className="alert alert-danger">{error}</div>} // TODO-2
        </div>
    );
}

export default Input;