import React, { Component } from "react";
import "./table.css";

class Table extends Component {
render() {
  return (
  <div>

  <table className="table">
    <tr>
      <th>label</th>
      <th>price</th>

    </tr>
    <tr>
      <td>dad tee</td>
      <td>10</td>

    </tr>
    <tr>
      <td>dad tee</td>
      <td>20</td>

    </tr>
    <tr>
      <td>dad tee</td>
      <td>30</td>

    </tr>
  </table>



  </div>
);
}
}
export default Table;
