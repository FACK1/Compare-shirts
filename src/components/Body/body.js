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
    const selected = (this.state.selectedShirts).find((selectedShirt) => JSON.stringify(selectedShirt) === JSON.stringify(shirt));
    if(!selected){
        this.setState({ selectedShirts: this.state.selectedShirts.concat([shirt]) });
        return true;
    } else {
        this.setState({ selectedShirts: (this.state.selectedShirts).filter((selectedShirt) => !(JSON.stringify(selectedShirt) === JSON.stringify(shirt))) });
        return false;
    }
  }

  render() {
    return (
<React.Fragment>
<Header />
<Shirts selectShirt={this.selectShirt} />
<Table selectedShirts={this.state.selectedShirts}/>
</React.Fragment>
    );
  }
}

export default Body;
