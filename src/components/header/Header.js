import React from "react";
import {
  BHeader,
  BImg,
  Container,
  Row,
  Col,
  Display4
} from "bootstrap-4-react";

const Header = props => {
  const img_1x1 =
    "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
  return (
    <Container fluid={true} className="header">
      <BHeader>
        <Row>
          <Col col="sm-4" text="center">
            <Display4>Logo</Display4>
          </Col>
          <Col col="sm-4" text="center">
            <Display4>My Orders</Display4>
          </Col>
          <Col col="sm-4" text="center">
            <BImg
              src={img_1x1}
              rounded="circle"
              width="50"
              height="50"
              mx="auto"
            />
          </Col>
        </Row>
      </BHeader>
    </Container>
  );
};

export default Header;
