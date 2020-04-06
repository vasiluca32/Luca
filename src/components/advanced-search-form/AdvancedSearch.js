import React, { Component } from "react";
import "./AdvancedSearch.css";
import { generateYears } from "./AdvancedSearchUtils";
import { YearSelector } from "./components/YearSelector";

class Form extends Component {
  state = {
    year: null,
  };

  componentDidMount() {
    console.log("search-form-mounteed");
  }

  // numbers() {
  //     let x = i;
  //     for (let i = 2020; i > 1900; i--) {
  //         console.log(i);

  //     }
  //     return (
  //         <option>{x}</option>

  //     )

  // }

  handleClickYear = (year) => {
    this.setState({ year });
  };

  render() {
    console.log(this.state);

    return (
      <form className="form-wraper">
        <div className="main">
          <p>This is the form for an advanced search</p>
          <div className="clause">
            <div className="label">
              <h3>Title</h3>
            </div>
            <div className="inputs">
              <input id="title" name="title" type="text" size="75"></input>
              <br></br>
              <em>e.g. The Godfather</em>
            </div>
          </div>

          <YearSelector onClick={this.handleClickYear} />

          <div className="clause">
            <div className="label">
              <h3>Genres</h3>
            </div>
            <div className="inputs">
              <table>
                <tr>
                  <td>
                    <input id="action" type="checkbox"></input>
                    <label>Action</label>
                  </td>
                  <td>
                    <input id="adventure" type="checkbox"></input>
                    <label>Adventure</label>
                  </td>
                  <td>
                    <input id="animation" type="checkbox"></input>
                    <label>Animation</label>
                  </td>
                  <td>
                    <input id="comedy" type="checkbox"></input>
                    <label>Comedy</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="crime" type="checkbox"></input>
                    <label>Crime</label>
                  </td>
                  <td>
                    <input id="drama" type="checkbox"></input>
                    <label>Drama</label>
                  </td>
                  <td>
                    <input id="family" type="checkbox"></input>
                    <label>Family</label>
                  </td>
                  <td>
                    <input id="fantasy" type="checkbox"></input>
                    <label>Fantasy</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="horror" type="checkbox"></input>
                    <label>Horror</label>
                  </td>
                  <td>
                    <input id="mistery" type="checkbox"></input>
                    <label>Mistery</label>
                  </td>
                  <td>
                    <input id="romance" type="checkbox"></input>
                    <label>Romance</label>
                  </td>
                  <td>
                    <input id="sci-fi" type="checkbox"></input>
                    <label>SCI-FI</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="superhero" type="checkbox"></input>
                    <label>Superhero</label>
                  </td>
                  <td>
                    <input id="thriller" type="checkbox"></input>
                    <label>Thriller</label>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="clause">
            <div className="label">
              <h3>Runtime</h3>
            </div>
            <div className="inputs">
              <input
                type="number"
                id="runtime-min"
                name="runtime-min"
                size="3"
              ></input>
              to
              <input
                type="number"
                id="runtime-max"
                name="runtime-max"
                size="6"
              ></input>
            </div>
          </div>

          <div className="clause">
            <div className="label">
              <h3>Country</h3>
            </div>
            <div className="inputs">
              <select multiple name="countries" class="countries" size="7">
                <option>USA</option>
                <option>UK</option>
                <option>Denmark</option>
                <option>Japan</option>
                <option>South Korea</option>
                <option>Canada</option>
                <option>Romania</option>
                <option>Philippines</option>
                <option>France</option>
              </select>
            </div>
          </div>

          <div className="clause">
            <div className="label">
              <h3>Languages</h3>
            </div>
            <div className="inputs">
              <select multiple name="countries" class="countries" size="7">
                <option>USA</option>
                <option>English</option>
                <option>Mandarin</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Japanese</option>
                <option>Portuguese</option>
                <option>Thai</option>
                <option>Esperanto</option>
                <option>Italian</option>
                <option>German</option>
                <option>Romanian</option>
                <option>Filipino</option>
                <option>Tagalog</option>
              </select>
            </div>
          </div>
          <p>
            <button className="submit" type="submit">
              Search
            </button>
          </p>
        </div>
      </form>
    );
  }
}

export default Form;
