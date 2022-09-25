import React from 'react';

// Input - liked: boolean
// Output - onClick: toggle

const Like = ({ liked, onClick }) => {

    let classes = "fa fa-thumbs-up"
    if (!liked) classes = 'fa-solid fa-thumbs-down'

    return (
        <i
            className={classes}
            style={{ cursor: 'pointer' }}
            onClick={onClick}
        />
    );
};

export default Like;