import React from "react";
import { generateMinutes } from "../AdvancedSearchUtils";

export function RuntimeSelector(props) {
    return (
        <div className="clause">
            <div className="label">
                <h3>Runtime</h3>
            </div>
            <div className="inputs">
                <select name="runtime-min" id="runtime-min" className="minutes">
                    {generateMinutes().map((minutes, index) => (

                        <option key={index} value="min" onClick={() => props.onClick(minutes)}>
                            {minutes}
                        </option>
                    ))}
                </select>
              to
              <select id="runtime-max" name="runtime-max">
                    {generateMinutes().map((minutes, index) => (

                        <option key={index} value="min" onClick={() => props.onClick(minutes)}>
                            {minutes}
                        </option>
                    ))}
                </select>
            </div>
        </div>


    )
}