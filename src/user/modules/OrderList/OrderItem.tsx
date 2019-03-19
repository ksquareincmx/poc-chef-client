import React, { useState } from "react";
import { ListStyled } from "src/partner/modules/ui";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { IOrder } from "src/partner/models/Order";
import { IProduct } from "src/partner/models/Order";
import { ListItemRow } from "src/partner/modules/ui/List/List";
import { MenuOptions } from "src/common/ui/MenuOptions";

const RowProducts = styledComponentsTS(styledComponents.div)`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    border-bottom: 2px solid #f3f3f3;
`;

const RowTitle = styledComponentsTS(styledComponents.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 15px;
`;

export interface ICell {
  align?: string;
  fontWeight?: string;
}
const Cell = styledComponentsTS<ICell>(styledComponents.div)`
    display: flex;
    justify-content: ${({ align }) => (align ? align : "left")};
    font-weight: ${({ fontWeight }) => fontWeight || "auto"};
`;

export interface IOrderItem {
  order: IOrder;
}

export const OrderItem: React.FC<IOrderItem> = props => {
  const getProductsRow = (products: IProduct[]) => {
    return products.map((product: IProduct) => (
      <ListItemRow key={`${props.order.id}_${product.name}`}>
        <RowProducts>
          <Cell key={"name" + product.id}>{product.name}</Cell>
          <Cell key={"quantity" + product.id} align="right">
            {product.quantity}
          </Cell>
          <Cell key={"price" + product.id} align="right">
            {product.price}
          </Cell>
        </RowProducts>
      </ListItemRow>
    ));
  };

  return (
    <>
      <ListStyled.ListItem>
        <ListItemRow borderBottom>
          <RowTitle>
            <Cell>{props.order.date}</Cell>
            <Cell align="right">{`Order #${props.order.id}`}</Cell>
            <MenuOptions>
              <a>View Order</a>
              <a>Edit Order</a>
              <a>Cancel Order</a>
            </MenuOptions>
          </RowTitle>
        </ListItemRow>
        <ListItemRow>
          <RowProducts>
            <Cell fontWeight="bold">Tortas</Cell>
            <Cell align="right" fontWeight="bold">
              Units
            </Cell>
            <Cell align="right" fontWeight="bold">
              Amount
            </Cell>
          </RowProducts>
        </ListItemRow>
        {getProductsRow(props.order.products)}
        <ListItemRow>
          <RowTitle>
            <Cell>TOTAL</Cell>
            <Cell align="right">${props.order.total} MXN</Cell>
          </RowTitle>
        </ListItemRow>
      </ListStyled.ListItem>
    </>
  );
};
