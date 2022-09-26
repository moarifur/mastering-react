import React from 'react';

// Input - liked: boolean
// Output - onClick: toggle

const Like = ({ liked, onClick }) => {

    let classes = "fa fa-thumbs-up"
    let color = '#8bc24c'

    if (!liked){
        classes = 'fa-solid fa-thumbs-down'
        color = '#525252'
    }

    return (
        <i
            className={classes}
            style={{ cursor: 'pointer', color}}
            onClick={onClick}
        />
    );
};

export default Like;