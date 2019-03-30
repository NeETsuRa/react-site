import React, { Component } from "react";
 
class Image extends React.Component {

  listDesc = (desc) => {
    let content = []
    for (let i = 0; i < 2; i++) {
      content.push(<p>{desc[i]}</p>)
    }
    return content
  }

  render() {
    return (
      <div>
        <div className="dropdown">
            <img src={this.props.img} className="mashinepreshow" alt="Photo" />
            <div className="dropdown-content">
                <img src={this.props.img} className="mashinePhoto" alt="Photo" />
                <div className="desc">
                  <div>
                    <p className = "imageTitle">{this.props.title}</p>
                    {this.listDesc(this.props.desc)}
                  </div>
                </div>
            </div>
        </div> 
      </div>
    );
  }
}

export default Image;