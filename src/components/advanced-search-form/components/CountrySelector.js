import React from "react";

export function CountrySelector(props) {
    return (

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
    )
}