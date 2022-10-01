import React, {Component} from 'react';
import _ from "lodash";

import MoviesTable from "./moviesTable";
import DisplayMessage from "./displayMessage";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import {movies} from "./services/fakeMovieService";
import {getGenres} from "./services/fakeGenreService";
import {paginate} from "./utils/paginate";
import ProjectInfo from "./projectInfo";

class MainVidlyApp extends Component {
    state = {
        // Link movie (data source)
        movies: movies,
        // Pagination
        pageSize: 5,
        currentPage: 1,
        // Filtration
        genres: [{ _id: "0", name: "All Genres" }, ...getGenres()],
        // Sorting
        sortColumn: { path: "title", order: "asc" }
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

    /*-------------------------------------------------------------------
    TODO(target): Change page number in pagination
    TODO-1: Set current page to clicked page number
    --------------------------------------------------------------------*/
    handlePageChange = page => {
        this.setState({ currentPage: page }) // TODO-1
    }

    /*-------------------------------------------------------------------
    TODO(target): Filter movies by selecting genres
    TODO-1:
    --------------------------------------------------------------------*/
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }

    /*-------------------------------------------------------------------
    TODO(target): Filter movies by selecting genres
    TODO-1:
    --------------------------------------------------------------------*/
    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    render() {
        // Destructuring data
        const {movies: allMovies, pageSize, currentPage, genres, selectedGenre, sortColumn} = this.state

        // Filtering data
        const filtered = selectedGenre && selectedGenre._id !== "0"
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        // Sorting data
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        // Paginate data
        const movies = paginate(sorted, currentPage, pageSize)

        return (
            <div className='container mt-5 col-lg-10'>
                <div className="row">
                    <div className="col-2 text-center">
                        <ListGroup
                            items={genres}
                            selectedItem={selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col-6">
                        <DisplayMessage length={filtered.length}/>
                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                        />
                        <Pagination
                            itemsCount={filtered.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                    <div className="col-3 text-center">
                        <ProjectInfo />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainVidlyApp;