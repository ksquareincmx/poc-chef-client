import * as React from "react";
// import { DataOrder } from "./orders";
import styled from "@emotion/styled";

import { IOrderEntity } from "./../interfaces/";

interface IProps {
  orders: IOrderEntity[];
}

export const Order: React.SFC<IProps> = props => {
  // const DivOrder = styled.div({
  //   borderRadius: "20px",
  //   boxShadow: "rgba(0, 0, 0, 0.8) 0 0 10px",
  //   borderCollapse: "collapse"
  // });
  const Div = styled.div({
    color: "hotpink"
  });
  // const orders = props.orders.map((order, key) => (
  //   <Div key={key}>
  //     <div>holi</div>
  //   </Div>
  // ));

  // const empty = (
  //   <Div>
  //     <h4>No Orders</h4>
  //   </Div>
  // );

  // orders = props.orders.length >= 1 ? orders : empty;

  return <Div className="main container">loli</Div>;
};

// export default Order;
