import React, { Component } from "react";
import "./table.css";

class Table extends Component {

  constructor(props) {
    super(props);
    this.bindData = this.bindData.bind(this);
  }

  bindData() {
      return (this.props.selectedShirts).map((shirtObj) => {
        return (
            <tr>
                <td>{shirtObj.label}</td>
                <td>{ shirtObj.price } $</td>
            </tr>);
      });
  }

    render() {
      return (
          <table className="table">
              <thead>
                <th>label</th>
                <th>price</th>
              </thead>
              {this.bindData()}
              </table>
      );
  }

}
export default Table;
