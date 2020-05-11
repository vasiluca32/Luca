import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class SearchByTitleNavbar extends Component {
  constructor() {
    super();
  }

  render() {
    let title = this.props.location.title;

    return (
      <div>
        <p>Search results for title: {title}</p>
        <MovieInfo title={title}/>
      </div>
    );
  }
}

export default SearchByTitleNavbar;
