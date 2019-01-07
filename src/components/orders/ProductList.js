import React from "react";
import { BDiv, Row, Col } from "bootstrap-4-react";

const ProductList = props => {
  const products = props.products;

  let productList = products.map((data, key) => (
    <Row key={key}>
      <Col col="sm-8">
        <strong>{data.quantity}</strong> x {data.type} de {data.name}:{" "}
      </Col>
      <Col col="sm-4">${data.price}</Col>
    </Row>
  ));

  return <BDiv>{productList}</BDiv>;
};

export default ProductList;
