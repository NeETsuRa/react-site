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
          <li>
            <Image
              img={WMW}
              title="WMW"
              desc={['something', 'second']}
            />
          </li>
          <li>
            <Image 
              img={Kikinda} 
              title="Kikinda" 
              desc={['something', 'second']} 
            />
          </li>
          <li>
            <Image 
              img={Kikinda2} 
              title="Kikinda" 
              desc={['something', 'second']} 
            />
          </li>
          <li>
            <Image 
              img={jung} 
              title="Jung" 
              desc={['something', 'second']} 
            />
          </li>
          <li>
            <Image 
              img={Peskalna} 
              title="Peskalna" 
              desc={['something', 'second']} 
            />
          </li>
          <li>
            <Image 
              img={Prvomajska} 
              title="Prvomajska" 
              desc={['something', 'second']} 
            />
          </li>
          <li>
            <Image 
              img={Struženje} 
              title="Struženje" 
              desc={['something', 'second']} 
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Stroji;