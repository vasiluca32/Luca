import React, { Component } from "react";
import "./Form.css";
import { handleImputs } from "./New-movie utils";

class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Year: "",
            Runtime: "",
            Genre: "",
            Language: "",
            Country: "",
            Poster: "",
            imdbRating: "",
            imdbVotes: "",
            imdbID: "",
            Type: ""

        };
    }
    componentDidMount() {
        let token = localStorage.getItem("access_token");
        console.log(token);
        console.log(this.state)
    }

    handleChangeTitle = (event) => {
        this.setState({ Title: event.target.value });
    }
    handleChangeYear = (event) => {
        this.setState({ Year: event.target.value });
    }
    handleChangeRuntime = (event) => {
        this.setState({ Runtime: event.target.value + " min" });
    }
    handleChangeGenre = (event) => {
        this.setState({ Genre: event.target.value });
    }
    handleChangeLanguage = (event) => {
        this.setState({ Language: event.target.value });
    }
    handleChangeCountry = (event) => {
        this.setState({ Country: event.target.value });
    }
    handleChangePoster = (event) => {
        this.setState({ Poster: event.target.value });
    }
    handleChangeRating = (event) => {
        this.setState({ imdbRating: event.target.value });
    }
    handleChangeVotes = (event) => {
        this.setState({ imdbVotes: event.target.value });
    }
    handleChangeImdbId = (event) => {
        this.setState({ imdbID: event.target.value });
    }
    handleChangeType = (event) => {
        this.setState({ Type: event.target.value });

    }

    addNewMovie() {
        handleImputs();

        let token = localStorage.getItem("access_token");
        const url = "https://movies-app-siit.herokuapp.com/movies"
        const data = this.state;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        console.log(data)

        console.log(JSON.stringify(data))

    }

    render() {
        return (
            <div className="continer">
                <form className="container bg-light p-5 h-auto">
                    <p>Add Movie Form</p>
                    <div className="form-row">
                        <label className="col-sm-4">
                            <p>Title</p>
                            <input className="form-control" type="text" id="title" onChange={this.handleChangeTitle}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>Year</p>
                            <input className="form-control" type="number" id="year" onChange={this.handleChangeYear}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>Runtime</p>
                            <input className="form-control" type="number" id="runtime" onChange={this.handleChangeRuntime}></input>
                        </label>
                    </div>
                    <div className="form-row">
                        <label className="col-sm-4">
                            <p>Genre</p>
                            <input className="form-control" type="text" id="genre" onChange={this.handleChangeGenre}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>Language</p>
                            <input className="form-control" type="text" id="language" onChange={this.handleChangeLanguage}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>Country</p>
                            <input className="form-control" type="text" id="country" onChange={this.handleChangeCountry}></input>
                        </label>
                    </div>
                    <div className="form-row">
                        <label className="col-sm-4">
                            <p>Poster</p>
                            <input className="form-control" type="text" id="poster" onChange={this.handleChangePoster}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>IMDB Rating</p>
                            <input className="form-control" type="number" id="rating" step="any" onChange={this.handleChangeRating}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>IMDB Votes</p>
                            <input className="form-control" type="number" id="votes" onChange={this.handleChangeVotes}></input>
                        </label>
                    </div>

                    <div className="form-row">
                        <label className="col-sm-4">
                            <p>IMDB ID</p>
                            <input className="form-control" type="text" id="imdbID" onChange={this.handleChangeImdbId}></input>
                        </label>
                        <label className="col-sm-4">
                            <p>Type</p>
                            <input className="form-control" type="text" id="type" onChange={this.handleChangeType}></input>
                        </label>
                    </div>
                    <label className="col-sm-4">
                        <button className="btn btn-secondary mr-5" type="button" onClick={() => { this.addNewMovie() }}>Submit</button>
                    </label>

                </form>


            </div>

        )
    }



}

export default NewMovieForm;