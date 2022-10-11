import React from 'react';

/*---------------------------------------------------------
* Target: Create a reusable input field with validation
* TODO-1: Use rest parameter - https://tinyurl.com/vn4zt42t
* TODO-2: Conditional rendering for error handling
* --------------------------------------------------------*/

const Select = ({ name, label, error, options, ...rest }) => {

    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <select className="form-control" id={name} name={name} {...rest}>
                {options.map(option =>
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>)}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Select;