import React, {Component} from 'react';

class MoviesTable extends Component {
    render() {
        const {movies, onDelete} = this.props
        if(movies.length === 0) return null
        return (
            <table className="table table-bordered table-hover">
                <thead className="table-info">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Action</th>
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
                            <button
                                onClick={() => onDelete(movie._id)}
                                className='btn btn-danger'
                            >Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;