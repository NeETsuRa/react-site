import React, { Component } from "react";
 
class Image extends Component {
  render() {
    return (
      <div>
        <div className="dropdown">
            <img src={this.props.img} className="mashinePhoto" alt={this.props.desc} />
            <div className="dropdown-content">
            <img src={this.props.img} className="mashinePhoto" alt="WMW" />
            <div className="desc">Text</div>
            </div>
        </div> 
      </div>
    );
  }
}
 
export default Image;