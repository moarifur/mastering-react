import React, {Component} from 'react';
import Navbar from "./navbar";
import MoviesTable from "./moviesTable";
import DisplayMessage from "./displayMessage";
import {movies} from "./services/fakeMovieService";

class MainVidlyApp extends Component {
    state = {
        movies: movies  // Link movie (data source)
    }

    // Handler methods:
    /*-------------------------------------------------------------------
    TODO(target): Delete a movie
    TODO-1: Create a new 'movies' object of array with 'Array.filter()'
    TODO-2: Update state for 'movies'
    --------------------------------------------------------------------*/
    handleDelete = id => {
        const movies = this.state.movies.filter(movie => movie._id !== id); // TODO-1
        this.setState({ movies }); // TODO-2
    }

    /*-------------------------------------------------------------------
    TODO(target): Like a movie
    TODO-1: Clone 'movies' array of object.
    TODO-2: Find the index of that object.
    TODO-3: Clone a particular 'movie' object.
    TODO-4: Toggle algorithm.
    TODO-5: Update state for 'movies'.
    --------------------------------------------------------------------*/
    handleLike = movie => {
        const movies = [...this.state.movies]; // TODO-1
        const index = movies.indexOf(movie); // TODO-2
        movies[index] = { ...movies[index] }; // TODO-3
        movies[index].liked = !movies[index].liked; // TODO-4
        this.setState({ movies }); // TODO-5
    }

    render() {
        const {movies} = this.state
        return (
            <>
                <Navbar/>
                <div className='container mt-5'>
                    <div className="row">
                        <div className="col-7">
                            <DisplayMessage movies={movies}/>
                            <MoviesTable
                                movies={movies}
                                onDelete={this.handleDelete}
                                onLike={this.handleLike}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainVidlyApp;