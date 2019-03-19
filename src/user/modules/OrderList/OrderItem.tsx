import React, { useState } from "react";
import { ListStyled } from "src/partner/modules/ui";
import { IOrder } from "src/partner/models/Order";
import { ListItemRow } from "src/partner/modules/ui/List/List";
import { MenuOptions } from "src/common/ui/MenuOptions";
import { Cell, RowProducts, RowTitle } from "./OrderStyles";
import { ProductList } from "./ProductList";

export interface IOrderItem {
  order: IOrder;
}

export const OrderItem: React.SFC<IOrderItem> = props => {
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
        <ProductList products={props.order.products} />
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
