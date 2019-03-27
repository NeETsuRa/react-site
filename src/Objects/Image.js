import React, { Component } from "react";
 
class Image extends Component {
  render() {
    return (
      <div>ssaass
        <div className="dropdown">
            <img src={this.props.img} className="mashinePhoto" alt="Photo" />
            <div className="dropdown-content">
            <img src={this.props.img} className="mashinePhoto" alt="Photo" />
            <div className="desc">{this.props.desc}</div>
            </div>
        </div> 
      </div>
    );
  }
}
 
export default Image;