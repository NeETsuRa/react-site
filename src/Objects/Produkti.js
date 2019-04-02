import React, { Component } from "react";
import Image from "./Image";
import prod from "../Media/produkti/20180203_100307.jpg";
import prod1 from "../Media/produkti/20180203_100315.jpg";
import prod2 from "../Media/produkti/20180203_103129.jpg";
import prod3 from "../Media/produkti/20180203_103146.jpg";
import prod4 from "../Media/produkti/20180529_174031.jpg";
import prod5 from "../Media/produkti/20180529_184022.jpg";
import prod6 from "../Media/produkti/20180529_184042.jpg";
import prod7 from "../Media/produkti/20180529_184050.jpg";
import prod8 from "../Media/produkti/20180607_165551.jpg";
import prod9 from "../Media/produkti/20180607_165557.jpg";
import prod10 from "../Media/produkti/20180608_161803.jpg";
import prod11 from "../Media/produkti/20180608_161910.jpg";
import prod12 from "../Media/produkti/20180608_162515.jpg";
import prod13 from "../Media/produkti/20180608_162525.jpg";
import prod14 from "../Media/produkti/20180714_200700.jpg";
import prod15 from "../Media/produkti/20180808_202513.jpg";
import prod16 from "../Media/produkti/20180808_202522.jpg";
import prod17 from "../Media/produkti/20180808_202538.jpg";
import prod18 from "../Media/produkti/20180810_172533.jpg";
import prod19 from "../Media/produkti/20180810_172540.jpg";
import prod20 from "../Media/produkti/IMG_20171026_165217.jpg";
import prod21 from "../Media/produkti/IMG_20171125_164440.jpg";
import prod22 from "../Media/produkti/IMG_20171125_164457.jpg";
import prod23 from "../Media/produkti/IMG_20180203_100130.jpg";
import prod24 from "../Media/produkti/IMG_20180203_100218.jpg";
import prod25 from "../Media/produkti/IMG_20180203_100236.jpg";
import prod26 from "../Media/produkti/IMG_20180203_103030.jpg";
import prod27 from "../Media/produkti/IMG_20180203_103153.jpg";
import prod28 from "../Media/produkti/IMG_20180203_103206.jpg";
import prod29 from "../Media/produkti/IMG_20180203_103220.jpg";
import prod30 from "../Media/produkti/IMG_20180302_195748.jpg";
import prod31 from "../Media/produkti/IMG_20180306_153459.jpg";
import prod32 from "../Media/produkti/IMG_20180324_134717.jpg";
import prod33 from "../Media/produkti/IMG_20180324_134722.jpg";
import prod34 from "../Media/produkti/IMG_20180608_155916.jpg";
import prod35 from "../Media/produkti/IMG_20180608_155920.jpg";
import prod36 from "../Media/produkti/IMG_20180623_095729.jpg";
import prod37 from "../Media/produkti/IMG_20180623_095756.jpg";
import prod38 from "../Media/produkti/IMG_20180804_095409.jpg";
import prod39 from "../Media/produkti/IMG_20180804_095424.jpg";
import prod40 from "../Media/produkti/IMG_20180806_192146.jpg";
import prod41 from "../Media/produkti/IMG_20180806_192202.jpg";
import prod42 from "../Media/produkti/IMG_20180806_192227.jpg";
import prod43 from "../Media/produkti/IMG_20180808_202436.jpg";
import prod44 from "../Media/produkti/IMG_20180808_202438.jpg";
import prod45 from "../Media/produkti/IMG_20180808_202444.jpg";
import prod46 from "../Media/produkti/IMG_20180810_172512.jpg";
import prod47 from "../Media/produkti/IMG_20180810_172518.jpg";

class Produkti extends Component {
  render() {
    return (
      <div>
        <ul className="productList">
          <li>
            <Image
              img={prod}
              title="Prod"
              desc={[
                'inf1', 
                'Inf2'
              ]}
            />
          </li>
        </ul>
        <ul className="productList">
          <li>
            <Image
              img={prod2}
              title="Prod"
              desc={[
                'inf1', 
                'Inf2'
              ]}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Produkti;