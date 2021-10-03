import React from "react";

class SearchBar extends React.Component {
  state = {
    searchText: "",
  };
    handleSubmit = (event) => {
      event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row mb-5">
          <div className="col-12 mt-2">
            <input
              onChange={(event) => {
                this.setState({
                  searchText: event.currentTarget.value,
                });
                console.log(this.state.searchText);
              }}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            />
          </div>
        </div>
        SearchBar
      </form>
    );
  }
}
export default SearchBar;
