import React from 'react';

const TableHeader = ({ columns, sortColumn, onSort }) => {

    /*------------------------------------
    TODO(Target): Sort a column
    TODO-1: If a column is already sorted then change the order one to another
    TODO-2: If a column is not sorted then set path and order
    TODO-3: Call raising method to update the state for 'sortColumn'
    --------------------------------*/
    const raiseSort = path => {
        // TODO-1
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        }
        // TODO-2
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        onSort(sortColumn); // TODO-3
    };

    /*------------------------------------
    TODO(Target): Get icon for sorting
    TODO-1: No icon for not targeted column
    TODO-2: Check column order and set
     icon asc or desc like a toggle button
    -------------------------------------*/
    const getSortIcon = path => {
        if (path !== sortColumn.path) return null; // TODO-1
        return sortColumn.order === 'asc'
            ? <i className="fa fa-sort-asc"/>
            : <i className="fa fa-sort-desc"/>
    };

    return (
        <thead>
        <tr>{columns.map(column =>
            <th style={{ cursor: 'pointer'}}
                key={column.path || column.key}
                onClick={() => raiseSort(column.path)}>
                {column.label}{getSortIcon(column.path)}
            </th>
        )}</tr>
        </thead>
    );
};

export default TableHeader;