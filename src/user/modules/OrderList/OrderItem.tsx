import React, { useState } from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { ListStyled } from "src/partner/modules/ui";
import { IOrder } from "src/partner/models/Order";
import { ListItemRow } from "src/partner/modules/ui/List/List";
import { MenuOptions } from "src/common/ui/MenuOptions";
import { Cell, RowProducts, RowTitle } from "./OrderStyles";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

const Total = styledComponentsTS(styledComponents.div)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem 0 0.75rem;
`;

interface IBoldTextProps {
  align?: string;
}

const BoldText = styledComponentsTS<IBoldTextProps>(styledComponents.p)`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  color: #515354;
  text-align: ${props => props.align ? props.align : 'center'}
`;

export interface IOrderItem {
  order: IOrder;
  openCancelModal: (orderId: string) => void;
}

export const OrderItem: React.SFC<IOrderItem> = props => {
  const handleOpenModal = () => {
    props.openCancelModal(props.order.id);
  };

  return (
    <>
      <ListStyled.ListItem>
        <ListItemRow borderBottom>
          <RowTitle>
            <Cell>{props.order.createdAt}</Cell>
            <Cell align="right">{`Order #${props.order.id}`}</Cell>
            <MenuOptions>
              <Link to={`user/order/${props.order.id}`}>View order</Link>
              <a>Edit Order</a>
              <a onClick={handleOpenModal}>Cancel Order</a>
            </MenuOptions>
          </RowTitle>
        </ListItemRow>
        <ListItemRow>
          <RowProducts>
            <Cell>
              <BoldText>Tortas</BoldText>
            </Cell>
            <Cell>
              <BoldText align='center'>Units</BoldText>
            </Cell>
            <Cell>
              <BoldText align='right'>Amount</BoldText>
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
