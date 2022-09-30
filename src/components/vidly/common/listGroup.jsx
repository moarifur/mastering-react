import React from "react";

const ListGroup = ({items, selectedItem, onItemSelect, textProperty, valueProperty}) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    onClick={() => onItemSelect(item)}
                    style={{ cursor: 'pointer'}}
                    key={item[valueProperty]}
                    className={
                        item === selectedItem ? 'list-group-item active' : 'list-group-item border'
                    }
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

// https://tinyurl.com/5ejd7th8
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;