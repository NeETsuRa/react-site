import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="MainHeader">        
          <h1>OBDELAVA KOVIN TOMO RAVNJAK S.P.</h1>
        </div>

        <div className="productGroup">
          <h1 className="productGroupTitle">Nudimo vam usluge:</h1>
          <ul>
            <p className="productGroupTitle">Okroglo Brušenje Notranje</p> 
            <p className="productGroupTitle">Okroglo Brušenje Zunanje</p> 
            <p className="productGroupTitle">Ploskovno Brušenje</p>
            <p className="productGroupTitle">Struženje</p>
            <p className="productGroupTitle">Poliranje</p>
            <p className="productGroupTitle">Rezkanje</p>
            <p className="productGroupTitle">Fino peskanje</p>
            <p className="productGroupTitle">Svetovanje</p>
          </ul>
        </div>

      </div>
    );
  }
}
 
export default Home;