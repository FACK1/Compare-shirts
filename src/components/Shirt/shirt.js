import React, { Component } from "react";
import "./shirt.css";

class Shirt extends Component {

  constructor(props) {
    super(props);
    this.onShirtClick = this.onShirtClick.bind(this);
  }

  onShirtClick(){
    this.props.selectShirt({label: this.props.shirtTitle, price: this.props.shirtPrice});
  }


    render() {
        return (<div className="shirt-card" onClick={this.onShirtClick}>
            <img src={this.props.imageUrl} />
            <p>{this.props.shirtTitle}</p>
            <p>{this.props.shirtPrice}</p>
        </div>);
    }
}

export default Shirt
