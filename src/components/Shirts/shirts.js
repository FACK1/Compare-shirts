import React, { Component } from "react";
import "./shirts.css";
import shirtsList from  "../../shirtsList.json";
import Shirt from "../Shirt/shirt";

class Shirts extends Component {

  constructor(props) {
    super(props);
  }

 getShirts(){
   const renderedShirts = shirtsList.map(({imgUrl,label,price})=>{
    return <Shirt imageUrl={imgUrl} shirtTitle={label} shirtPrice={price} selectShirt={this.props.selectShirt} />
   });
   return (<div className="shirts-list"> {renderedShirts} </div>);
 }

    render() {
      return this.getShirts();
    }
}

export default Shirts
