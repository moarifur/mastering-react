import React, {Component} from 'react';
import Like from "./common/like";
import Delete from "./common/delete";

class MoviesTable extends Component {
    render() {
        const {movies, onDelete, onLike} = this.props
        if(movies.length === 0) return null
        return (
            <table className="table table-hover">
                <thead className="table-info">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
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