import React, { Component } from "react";
import NoPoster from "../images/NoPoster.png";
import "./AllCategories.css";
import PaginationPage from "./PaginationPage";
import Star from "../images/star.png";

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      pagination: {},
      currentPage: 1,
      postsPerPage: 10,
    };
  }

  componentDidMount() {
    this.fetchMovies(this.state.currentPage);
  }

  fetchMovies(pageNumber) {
    const moviesPerPage = this.state.postsPerPage;
    const genre = this.props.genre;

    const skip = (pageNumber - 1) * moviesPerPage;

    fetch(
      `https://movies-app-siit.herokuapp.com/movies?&Genre=${genre}&take=${moviesPerPage}&skip=${skip}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((movies) => {
        this.setState({
          results: movies.results,
          pagination: movies.pagination,
        });
      });
  }
  DeleteMovie(id) {
    let url = `https://movies-app-siit.herokuapp.com/movies/${id}`;
    console.log(url);
  }

  // if (result.accessToken !== undefined) {
  //     let requestOptions = {
  //       method: "DELETE",
  //       headers: myHeaders,
  //       body: raw,
  //     };

  //     fetch(url, requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log(result);

  //         }
  //       })
  //       .catch((error) => console.log("error", error));

  //   }

  render() {
    const numberOfPages = this.state.pagination.numberOfPages;
    const activePage = this.state.pagination.currentPage;

    const paginationAction = (pageNumber) => this.fetchMovies(pageNumber); //face update la pagina facand fetch-ul corespunzator pentru pagina respectiva

    const prevPage = () => {
      if (activePage > 1) {
        this.fetchMovies(activePage - 1);
      }
    };

    const nextPage = () => {
      if (activePage < numberOfPages) {
        this.fetchMovies(activePage + 1);
      }
    };

    return (
      <div className="movie-container">
        {this.state.results.map((movie) => {
          let moviePoster = NoPoster;
          if (movie.Poster && movie.Poster !== "N/A") {
            moviePoster = movie.Poster;
          }

          return (
            <div className="container-fluid" key={movie._id}>
              <div className="row">
                <div className="col-md-3" className="poster-container">
                  <img src={moviePoster} className="card-image" alt="poster" />
                </div>

                <div className="col-md-3" id="card-body-movie-list">
                  <div className="movie-details">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">Genre: {movie.Genre}</p>
                    <p id="rating" className="card-text">
                      imdbRating: {movie.imdbRating}
                      <img src={Star} className="rating-img" alt="rating" />
                    </p>
                    <p className="card-text">Runtime: {movie.Runtime}</p>
                    <p className="card-text">Language: {movie.Language}</p>
                    <p className="card-text">
                      {" "}
                      <small className="text-muted">
                        imdbVotes: {movie.imdbVotes}{" "}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Year: {movie.Year}</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4" id="movie-info">
                  <h6 className="card-title"> MOVIE INFO </h6>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="col-md-2" id="buttons">
                  <button
                    id="EDIT"
                    type="button"
                    className="btn btn-outline-light"
                  >
                    EDIT
                  </button>

                  <button
                    type="button"
                    id="DELETE"
                    class="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#deleteModal"
                  >
                    DELETE
                  </button>

                  <div
                    class="modal fade text-dark"
                    id="deleteModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="deleteModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title " id="deleteModalLabel">
                            Warning
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>
                            {" "}
                            Do you really want to delete the movie ${
                              movie._id
                            }?{" "}
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            No
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => this.DeleteMovie(movie._id)}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <PaginationPage
          numberOfPages={numberOfPages}
          activePage={activePage}
          paginationAction={paginationAction}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    );
  }
}

export default MovieInfo;
