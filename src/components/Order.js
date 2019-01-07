import React from "react";
import DataOrder from "./orders/DataOrder";
import { Container, BDiv, Display4 } from "bootstrap-4-react";

const Order = props => {
  let orders = props.orders.map((order, key) => (
    <BDiv key={key} shadow p="3" mb="5" bg="light" rounded>
      <DataOrder order={order} />
    </BDiv>
  ));

  const empty = (
    <BDiv text="center" shadow p="3" mb="5" bg="light" rounded>
      <Display4>No Orders</Display4>
    </BDiv>
  );

  orders = props.orders.length >= 1 ? orders : empty;

  return (
    <Container fluid={false} className="main">
      {orders}
    </Container>
  );
};

export default Order;
