import React, { Component } from "react";
import "./shirt.css";

class Shirt extends Component {
    render() {
        return (<div className="shirt-card">
            <img src={this.props.imageUrl} />
            <p>{this.props.shirtTitle}</p>
            <p>{this.props.shirtPrice}</p>
        </div>);
    }
}

export default Shirt
