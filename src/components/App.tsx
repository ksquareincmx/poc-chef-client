import * as React from "react";
// import { Header } from "./header";
import { Order } from "./Order";

import orders from "./../interfaces/orders";

class App extends React.Component {
  public render() {
    return <Order orders={orders} />;
  }
}

export default App;
