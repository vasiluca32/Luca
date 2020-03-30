import React, { Component } from "react";
import './Carousel.css';
import LeftArrow from './LeftArrow.js'
import RightArrow from "./RightArrow";

const url = "https://movies-api-siit.herokuapp.com/movies?take=100000"

class Carousel extends Component {

    constructor() {
        super();
        this.state = {
            movieInfo: [],
        }
    }


    componentDidMount() {


        fetch(url)
            .then(results => {
                return results.json();
            }).then(data => {
                let info = data.results.map((res) => {
                    return (
                        <div class="info-keeper" key={res.results}>
                            <img src={res.Poster} alt="logo" />
                            <p>{res.Title}</p>
                            <p>{res.imdbRating}</p>

                        </div>
                    )
                })
                this.setState({ movieInfo: info })
                // console.log("state", this.state.pictures);
                // console.log(pictures);


            })

    }




    render() {
        console.log(this.state)
        return (
            <div className="container2">

                <div className="container1">
                    <LeftArrow />
                    {this.state.movieInfo}
                    <RightArrow />
                </div>

            </div>
        )
    }


}

export default Carousel;

