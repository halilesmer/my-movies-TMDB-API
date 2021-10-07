import React from "react";

class SearchBar extends React.Component {

 /*  state = {
    searchText: "",
  }; */
    
    handleSubmit = (event) => {
      event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row mb-5">
          <div className="col-12 mt-2">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
              onFocus={(e) => e.currentTarget.select()}
            />
          </div>
        </div>
        SearchBar
      </form>
    );
  }
}
export default SearchBar;
