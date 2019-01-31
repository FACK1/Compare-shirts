import React, { Component } from "react";
import Header from '../Header/header';
import Shirts from '../Shirts/shirts';
import Table from '../Table/table';
import './body.css';


class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedShirts: [],
    };
    this.selectShirt = this.selectShirt.bind(this);
  }



  selectShirt(shirt) {
    this.setState({ selectedShirts: this.state.selectedShirts.concat([shirt]) });
  }

  render() {
    return (
<React.Fragment className="react-frgment">
<Header />
<Shirts selectShirt={this.selectShirt} />
<Table selectedShirts={this.state.selectedShirts}/>
</React.Fragment>
    );
  }
}

export default Body;
