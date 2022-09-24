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
    TODO(target): Delete a counter
    TODO-1: Create a new 'counters' object of array with 'Array.filter()'
    TODO-2: Update state for 'counters'
    --------------------------------------------------------------------*/
    handleDelete = id => {
        const movies = this.state.movies.filter(movie => movie.id !== id); // TODO-1
        this.setState({ movies }); // TODO-2
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
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainVidlyApp;