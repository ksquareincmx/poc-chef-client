import React from "react"
import {
  BHeader,
  BImg,
  Container,
  Row,
  Col
} from "bootstrap-4-react"

const Header = props => {
  const img_1x1 = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
  return (
    <Container fluid={true} className="header">
      <BHeader>
        <Row>
        <Col col="sm-4">Logo</Col>
        <Col col="sm-4">My Orders</Col>
        <Col col="sm-4">
          <BImg src={img_1x1} rounded="circle" width="50" height="50" mx="auto" />
        </Col>
        </Row>
      </BHeader>
    </Container>
  )
}

export default Header
