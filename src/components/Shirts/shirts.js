import React, { Component } from "react";
import "./shirts.css";
import shirtsList from  "../../shirtsList.json";
import Shirt from "../Shirt/shirt";

class Shirts extends Component {
 getShirts(){
   const renderedShirts = shirtsList.map(({imgUrl,label,price})=>{
    return <Shirt imageUrl={imgUrl} shirtTitle={label} shirtPrice={price} />
   });
   return (<div className="shirts-list"> {renderedShirts} </div>);
 }


    render() {
      return this.getShirts();
    }
}

export default Shirts
