import React, { Component } from "react";
import Header from '../Header/header';
import Shirts from '../Shirts/shirts';
import Table from '../Table/table';


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
<React.Fragment>
<Header />
<Shirts selectShirt={this.selectShirt} />
<Table />
</React.Fragment>
    );
  }
}

export default Body;
