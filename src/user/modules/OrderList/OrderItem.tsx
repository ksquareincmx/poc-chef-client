import React from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { ListStyled } from "src/partner/modules/ui";
import { IOrder } from "src/partner/models/Order";
import { ListItemRow } from "src/partner/modules/ui/List/List";
import { Cell, RowProducts } from "./OrderStyles";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import { Text } from "../Text";
import { USER_ORDER_EDIT_ROUTE } from "src/user/routes";

const Total = styledComponentsTS(styledComponents.div)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem 0 0.75rem;
`;

const formatDate = (unix: number) => {
  const date = new Date(unix);
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};

interface IBoldTextProps {
  align?: string;
}

const BoldText = styledComponentsTS<IBoldTextProps>(styledComponents.p)`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  color: #515354;
  text-align: ${props => (props.align ? props.align : "center")}
`;

export const Img = styledComponents.img({
  width: "1.2rem",
  height: "1.2em",
  objectFit: "contain",
});

export interface IOrderItem {
  order: IOrder;
  onCancelOrderModalOpen: (orderId: string) => void;
}

export const OrderItem: React.SFC<IOrderItem> = props => {
  return (
    <>
      <ListStyled.ListItem>
        <ListItemRow borderBottom>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ padding: "0.5rem 0.75rem" }}>
              <Cell>
                <BoldText>{props.order.eventName}</BoldText>
              </Cell>
              <Cell>
                <Text>{formatDate(props.order.createdAt)}</Text>
              </Cell>
              <Cell align="right">
                <Text>{`Order: ${props.order.id}`}</Text>
              </Cell>
            </div>
            <div style={{ padding: "0.5rem", boxSizing: "border-box" }}>
              <Link to={`${USER_ORDER_EDIT_ROUTE.replace(":id", props.order.id)}`}>
                <Img src={require(`src/images/edit-24px.svg`)} />
              </Link>
            </div>
          </div>
        </ListItemRow>
        <ListItemRow>
          <RowProducts>
            <Cell>
              <BoldText>Tortas</BoldText>
            </Cell>
            <Cell>
              <BoldText align="center">Units</BoldText>
            </Cell>
            <Cell>
              <BoldText align="right">Amount</BoldText>
            </Cell>
          </RowProducts>
        </ListItemRow>
        <ProductList products={props.order.products} />
        <ListItemRow>
          <Total>
            <Cell>
              <BoldText>TOTAL</BoldText>
            </Cell>
            <Cell align="right">
              <BoldText>${props.order.total} MXN</BoldText>
            </Cell>
          </Total>
        </ListItemRow>
      </ListStyled.ListItem>
    </>
  );
};
