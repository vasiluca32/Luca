import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieList from "../MovieList";


class SubmitButton extends Component {

    handleClick() {
        console.log("clickkkkked");
        // let x = new MovieList;
        // x.render();

    }

    render() {
        return (
            <div>

                <button className="submit" type="button" onClick={this.handleClick}  >
                    Search
                </button>

            </div >
        )
    }
}

export default SubmitButton;

