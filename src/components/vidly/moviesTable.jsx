import React from 'react';
import {Link} from "react-router-dom";
import Like from "./common/like";
import Delete from "./common/delete";
import Table from "./common/table";

const MoviesTable = ({ movies, onSort, onLike, onDelete, sortColumn }) => {
    const columns = [
        {
            key: 'title',
            label: 'Title',
            path: 'title',
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { label: 'Genre', path: 'genre.name' },
        { label: 'Stock', path: 'numberInStock' },
        { label: 'Rate', path: 'dailyRentalRate' },
        {
            key: 'like',
            content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} />
        },
        {
            key: 'delete',
            content: movie => <Delete onClick={() => onDelete(movie._id)} />
        }
    ];

    return (
        <Table
            data={movies}
            columns={columns}
            onSort={onSort}
            sortColumn={sortColumn}
        />
    )
};

export default MoviesTable;