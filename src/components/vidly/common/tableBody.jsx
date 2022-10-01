import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {

    const renderCell = (item, column) => {
        if (column.content) return column.content(item);

        return _.get(item, column.path);
    }

    const createKey = (item, column) => {
        return item._id + (column.path || column.key);
    }

    return (
        <tbody>
        {data.map((item) => (
            <tr key={item._id}>
                {columns.map((column) => (
                    <td key={createKey(item, column)}>
                        {renderCell(item, column)}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};

export default TableBody;

// <tbody>
// {data.map(item =>
//     <tr key={item._id ?? item.name.common}>
//         {columns.map(column => {
//             return column.content
//                 ? <td key={column.key}>{column.content(item)}</td>
//                 : <td key={column.path}>{_.get(item, column.path)}</td>
//         })}
//     </tr>)}
// </tbody>