import React, { Component } from "react";
import Image from "./Image";
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
          <li><Image img={WMW} desc="txt"/></li>
          <li><Image img={Kikinda} desc="txt"/></li>
          <li><Image img={Kikinda2} desc="txt"/></li>
          <li><Image img={jung} desc="txt"/></li>
          <li><Image img={Peskalna} desc="txt"/></li>
          <li><Image img={Prvomajska} desc="txt"/></li>
          <li><Image img={Struženje} desc="txt"/></li>
        </ul>
      </div>
    );
  }
}
 
export default Stroji;