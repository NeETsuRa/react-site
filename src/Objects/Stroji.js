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
              desc={[
                'Med konicami max premera Fi 200mm in do max dolžine 1000mm', 
                'Notranje max premera Fi 100 mm in do max dolžine 100mm'
              ]}
            />
          </li>
          <li>
            <Image 
              img={Kikinda} 
              title="Kikinda" 
              desc={[
                'Med konicami max premera Fi 350 mm in do max dolžine 700 mm', 
                'Notranje max premera Fi 300 mm in do max dolžine 300 mm'
              ]} 
            />
          </li>
          <li>
            <Image 
              img={Kikinda2} 
              title="Kikinda" 
              desc={[
                'ploskovno brušenje', 
                '500x250'
              ]} 
            />
          </li>
          <li>
            <Image 
              img={jung} 
              title="Jung" 
              desc={[
                'ploskovno in profilno brušenje', 
                '500x250'
              ]} 
            />
          </li>
          <li>
            <Image 
              img={Peskalna} 
              title="Peskalna" 
              desc={[
                'TESI peskanje kosov', 
                'cca 400x400x800 mm'
              ]} 
            />
          </li>
          <li>
            <Image 
              img={Prvomajska} 
              title="Prvomajska ALG-200" 
              desc={[
                'Klasično rezkanje'
              ]} 
            />
          </li>
          <li>
            <Image 
              img={Struženje} 
              title="Struženje" 
              desc={[
                'fi 300'
              ]} 
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Stroji;