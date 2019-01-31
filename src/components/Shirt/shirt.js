import React, { Component } from "react";
import "./shirt.css";

class Shirt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: 'shirt-card'
    };
    this.onShirtClick = this.onShirtClick.bind(this);
  }

  onShirtClick(){
    const selected = this.props.selectShirt({label: this.props.shirtTitle, price: this.props.shirtPrice});
    if(selected){
        this.setState({ style: 'selected-shirt-card' });
    } else {
        this.setState({ style: 'shirt-card' });
    }
  }

    render() {
        return (<div className={this.state.style} onClick={this.onShirtClick}>
            <img src={this.props.imageUrl} />
             <p className="paragraph">  {this.props.shirtTitle}</p>
             <p className="paragraph1"> Price:{this.props.shirtPrice} $</p>
        </div>);
    }
}

export default Shirt
