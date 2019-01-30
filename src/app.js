import React, { Component } from 'react';
import Header from './components/Header/header';
import Shirts from './components/Shirts/shirts';


class App extends Component {
  render() {
    return (
<React.Fragment>
<Header />
<Shirts />
</React.Fragment>
    );
  }
}

export default App;
