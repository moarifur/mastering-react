import React, {Component} from 'react';
import Like from "./common/like";
import Delete from "./common/delete";

// columns: array
// sortColumn: object
// onSort: function

class MoviesTable extends Component {

    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    }

    getSortIcon = path => {
        if (path !== this.props.sortColumn.path) return null;

        return this.props.sortColumn.order === 'asc'
            ? <i className="fa fa-sort-asc"/>
            : <i className="fa fa-sort-desc"/>
    }

    render() {
        const { movies, onDelete, onLike } = this.props
        if(movies.length === 0) return null
        return (
            <table className="table table-hover">
                <thead className="table-info">
                <tr>
                    <th
                        scope="col"
                        onClick={() => this.raiseSort('title')}
                        style={{ cursor: 'pointer'}}
                    >
                        Title
                        {this.getSortIcon('title')}
                    </th>
                    <th
                        scope="col"
                        onClick={() => this.raiseSort('genre.name')}
                        style={{ cursor: 'pointer'}}
                    >
                        Genre
                        {this.getSortIcon('genre.name')}
                    </th>
                    <th
                        scope="col"
                        onClick={() => this.raiseSort('numberInStock')}
                        style={{ cursor: 'pointer'}}
                    >
                        Stock
                        {this.getSortIcon('numberInStock')}
                    </th>
                    <th
                        scope="col"
                        onClick={() => this.raiseSort('dailyRentalRate')}
                        style={{ cursor: 'pointer'}}
                    >
                        Rate
                        {this.getSortIcon('dailyRentalRate')}
                    </th>
                    <th colSpan={2} className='text-center'>Action</th>
                </tr>
                </thead>
                <tbody>
                {movies.map(movie =>
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked={movie.liked}
                                onClick={() => onLike(movie)}
                            />
                        </td>
                        <td>
                            <Delete onClick={() => onDelete(movie._id)} />
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;