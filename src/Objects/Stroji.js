import React, { Component } from "react";
import jung from "../Media/stroji/20180130_182220.jpg";
import WMW from "../Media/stroji/20180825_144002.jpg";
import Kikinda from "../Media/stroji/20180825_143950.jpg";
import Kikinda2 from "../Media/stroji/20180825_143918.jpg";
import Peskalna from "../Media/stroji/20180825_143729.jpg";
import Prvomajska from "../Media/stroji/20180825_143750.jpg";
import Struženje from "../Media/stroji/20180825_143831.jpg";
 
class Stroji extends Component {
  render() {
    return (
      <div>
        <ul className="mashineList">
          <li className="listItem">
            <div className="dropdown">
              <img src={WMW} className="mashinePhoto" alt="WMW" />
              <div className="dropdown-content">
                <img src={WMW} className="mashinePhoto" alt="WMW" />
                <div className="desc">Text</div>
              </div>
            </div> 
          </li>
          <li><img src={Kikinda} className="mashinePhoto" alt="Kikinda" /></li>
          <li><img src={Kikinda2} className="mashinePhoto" alt="Kikinda" /> </li>
          <li><img src={jung} className="mashinePhoto" alt="Jung" /></li>
          <li><img src={Peskalna} className="mashinePhoto" alt="Peskalna komora" /></li>
          <li><img src={Prvomajska} className="mashinePhoto" alt="Prvomajska ALG-200" /></li>
          <li><img src={Struženje} className="mashinePhoto" alt="Struženje" /></li>
        </ul>
      </div>
    );
  }
}
 
export default Stroji;