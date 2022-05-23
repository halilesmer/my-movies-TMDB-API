import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
//import AddMovie from "./AddMovie";
import axios from "axios";
require("dotenv").config();

//console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  //Axios package
  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/4/list/7110660?page=1&api_key=${process.env.REACT_APP_API_KEY}`
    );
    //console.log(response)
    try {
      this.setState({ movies: response.data.results });
    } catch (error) {
      console.error(error);
    }
  }
  //with Axios package
  deleteMovie = async (movie) => {
    console.log('movie',movie)
     axios.post(`https://api.themoviedb.org/3/list/7110660/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}
   }`);
    const newMowieList = this.state.movies.filter(
      (m) => m.id !== movie.id
    );
    this.setState({ movies: newMowieList });
  };
  
  searchMovie = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  render() {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.searchQuery);
    });

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
