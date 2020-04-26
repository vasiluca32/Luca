
import React, { Component } from "react";
import NoPoster from "../../images/NoPoster.png";


class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      currentMovieIndex: 0
    }

  }

  componentDidMount() {
    let url = "https://movies-app-siit.herokuapp.com/movies?";
    let title = this.props.location.state.title;
    let genre = this.props.location.state.genre;
    let country = this.props.location.state.country;
    let language = this.props.location.state.language;
    if (title) {
      url = `${url}&Title=${title}`
    }
    if (genre) {
      url = `${url}&Genre=${genre}`
    }

    if (country.length > 0) {
      url = url + "Country=";
      for (let i = 0; i < country.length; i++) {

        url = url + country[i] + ", ";

      }
      url = url.slice(0, -2);
    }

    if (language.length > 0) {
      url = url + "&Language="
      for (let i = 0; i < language.length; i++) {

        url = url + language[i] + ", ";

      }
      url = url.slice(0, -2);
    }
    url = url + "&take=100"
    console.log(url);


    fetch(url).then(results => {
      return results.json();
    }).then(movie => {
      this.setState({ results: movie.results })
    })
  }

  render() {
    let minutesMin = this.props.location.state.minutesMin;
    let minutesMax = this.props.location.state.minutesMax;
    let runtimeResults = [];

    if (minutesMin || minutesMax) {
      if (minutesMin > minutesMax) {
        minutesMax = 240
        console.log("positive")
      }
      for (let i = 0; i < this.state.results.length; i++) {
        if (minutesMin <= parseInt(this.state.results[i].Runtime, 10) && parseInt(this.state.results[i].Runtime, 10) <= minutesMax) {
          runtimeResults.push(this.state.results[i]);

        }
      }
      this.state.results = runtimeResults;
    }

    return (
      <div className="movie-list-container">
        <h1>Here are your search results </h1>
        {this.state.results.map((movie) => {

          let moviePoster = NoPoster;
          if (movie.Poster && movie.Poster !== "N/A") {
            moviePoster = movie.Poster;
          }

          return (
            <div className="movie-info" key={movie._id}>
              <img src={moviePoster} alt="poster" />
              <p>{movie.Title}</p>
              <p>Genre: {movie.Genre}</p>
              <p>Year: {movie.Year}</p>
              <p>Country:{movie.Country}</p>
              <p>Runtime: {movie.Runtime}</p>
              <p>Language: {movie.Language}</p>
              <p>imdbRating: {movie.imdbRating}</p>
              <p>imdbVotes: {movie.imdbVotes}</p>
            </div>
          );
        })}
      </div>

    );
  }


}

export default MovieList;