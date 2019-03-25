import React, { Component } from "react";
import jung from "../Media/stroji/20180130_182220.jpg";
 
class Stroji extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>WMW</li>
          <li>Kikinda</li>
          <li>Kikinda </li>
          <li><img src={jung} className="mashinePhoto" alt="Jung" /></li>
          <li>Peskalna komora</li>
          <li>Prvomajska ALG-200</li>
          <li>Struženje </li>
        </ul>
      </div>
    );
  }
}
 
export default Stroji;