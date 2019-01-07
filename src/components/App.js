import React, { Component } from "react";
import Header from "./header/Header";
import Order from "./Order";

import orders from "./../interfaces/orders";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Order orders={orders} />
      </div>
    );
  }
}

export default App;
