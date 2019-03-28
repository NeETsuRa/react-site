import React, { Component } from "react";
 
class Image extends React.Component {
  render() {
    return (
      <div>
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