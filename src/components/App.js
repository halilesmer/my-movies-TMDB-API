import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";


class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  async componentDidMount()  {
    const baseUrl = "http://localhost:3002/movies";
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data)
    this.setState({ movies: data })

  }


  deleteMovie = (movie) => {
    const deletedMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies: deletedMovieList });
  };
  searchMovie = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  render() {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.name.toLowerCase().includes(this.state.searchQuery);
    });
    //console.log(filteredMovies);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>

        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
