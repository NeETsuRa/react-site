import React, { Component } from "react";
import Image from "./Image";
import prod from "../Media/produkti/20180203_100307.jpg";

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
      </div>
    );
  }
}

export default Produkti;