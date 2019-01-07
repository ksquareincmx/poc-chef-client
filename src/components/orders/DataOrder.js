import React from "react";
import ProductList from "./ProductList";
import { BDiv, Row, Col } from "bootstrap-4-react";

const DataOrder = props => {
  const { products, date, total, order } = props.order;

  return (
    <BDiv>
      <Row>
        <Col col="sm-8">
          <strong>{date}</strong>
        </Col>
        <Col col="sm-4">
          <strong>{order}</strong>
        </Col>
      </Row>
      <ProductList products={products} />
      <Row>
        <Col col="sm-8">
          <strong>Total</strong>
        </Col>
        <Col col="sm-4">
          <strong>${total}</strong>
        </Col>
      </Row>
    </BDiv>
  );
};

export default DataOrder;
