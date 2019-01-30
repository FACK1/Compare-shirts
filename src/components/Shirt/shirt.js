import React, { Component } from "react";
import "./shirt.css";

class Shirt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: 'shirt-card'
    }
    this.onShirtClick = this.onShirtClick.bind(this);
  }

  onShirtClick(){
    this.props.selectShirt({label: this.props.shirtTitle, price: this.props.shirtPrice});
    this.setState({ style: 'selected-shirt-card' });
  }


    render() {
        return (<div className={this.state.style} onClick={this.onShirtClick}>
            <img src={this.props.imageUrl} />
            <p>{this.props.shirtTitle}</p>
            <p>{this.props.shirtPrice}</p>
        </div>);
    }
}

export default Shirt
