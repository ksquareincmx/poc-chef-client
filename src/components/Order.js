import React from "react"
import DataOrder from "./orders/DataOrder"
import {
  Container,
  BDiv,
} from "bootstrap-4-react"

const Order = props =>  {

  const orders = props.orders.map((order, key)  =>  (
    <BDiv key={key} shadow p="3" mb="5" bg="light" rounded>
        <DataOrder
          order={order}
        />
    </BDiv>
  ))

  return  (
    <Container fluid={false} className="main">
      {orders}
    </Container>
  )
}

export default Order
