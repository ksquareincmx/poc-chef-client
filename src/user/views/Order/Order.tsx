import React from "react";
import styled from "@emotion/styled";
import { Header } from "src/partner/modules/Header";

const ListItem = styled.div({
  boxShadow: "-2px 2px 10px #bdbdbd",
  background: "white",
  width: "90%",
  height: "325px",
  borderRadius: "10px",
  marginBottom: "10px",
  paddingBottom: "10px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  marginTop: "-20px",
});

const OrderContainer = styled.div({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
});

const Title = styled.p({
  marginTop: "16px",
  marginLeft: "16px",
  fontWeight: "bold",
});
const Divider = styled.div({
  left: "10px",
  width: "94%",
  height: "1px",
  background: "#DDDDDD",
  marginLeft: "8px",
});

const TortasContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "135px",
  width: "300px",
  marginLeft: "10px",
});

const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const InputTorta = styled.input({
  width: "40px",
  height: "30px",
  marginTop: "10px",
});
export const GradientButton = styled.button({
  borderRadius: "35px",
  color: " #fff",
  padding: "10px 30px",
  background: "linear-gradient(to right, rgba(248, 130, 61,1) 0%, rgba(232,63,93, 1) 100%)",
  border: " 0px",
  width: "200px",
  height: "50px",
  margin: "2px auto",
  fontSize: "16px",
  fontWeight: "bold",
});

const TotalPrice = styled.div({
  display: "flex",
  flexDirection: "row",
  marginLeft: "10px",
});

const Price = styled.p({
  marginLeft: "70px",
});
export const Order = () => {
  return (
    <div>
      <Header title="Order" />
      <OrderContainer>
        <ListItem>
          <Title>My Order </Title>
          <Divider />
          <TortasContainer>
            <Row>
              <p>Torta de poc-chuc</p>
              <p>$22.00 MXN</p>
              <InputTorta />
            </Row>
            <Row>
              <p>Torta de poc-chuc</p>
              <p>$22.00 MXN</p>
              <InputTorta />
            </Row>
          </TortasContainer>
          <Divider />
          <TotalPrice>
            <p>
              <b>Total</b>
            </p>
            <Price>$69.00 MXN</Price>
          </TotalPrice>
          <GradientButton>Submit Happiness</GradientButton>
        </ListItem>
      </OrderContainer>
    </div>
  );
};
