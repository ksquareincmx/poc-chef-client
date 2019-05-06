import React from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { TextTable, TextTitleCardEvent, TextTableTitleCardEvent } from "src/common/ui/Text";
import { DateMapper } from "src/common/mappers/";
import { IOrder } from "src/user/models/Order";
import { OrderDescription, OrderProductsRow } from "../ui/OrderItem";
import { ProductList } from "./ProductList";

export interface IOrderItem {
  order: IOrder;
}

export const OrderItem: React.FC<IOrderItem> = ({
  order: { eventName, updatedAt, orderNumber, products, total },
}) => {
  const units = products.reduce((a, b) => a + b.quantity, 0);
  return (
    <CardContainer>
      <CardRowHeader>
        <OrderDescription>
          <TextTitleCardEvent>{eventName}</TextTitleCardEvent>
          <TextTable align="left">{DateMapper.unixDateToString(updatedAt)}</TextTable>
          <TextTable align="left">order #{orderNumber}</TextTable>
        </OrderDescription>
        <div>edit button</div>
      </CardRowHeader>
      <OrderProductsRow>
        <TextTableTitleCardEvent align="left">Product</TextTableTitleCardEvent>
        <TextTableTitleCardEvent align="right">Units</TextTableTitleCardEvent>
        <TextTableTitleCardEvent align="right">Amount</TextTableTitleCardEvent>
      </OrderProductsRow>
      <ProductList products={products} />
      <OrderProductsRow>
        <TextTableTitleCardEvent align="left">Total</TextTableTitleCardEvent>
        <TextTableTitleCardEvent align="right">{units}</TextTableTitleCardEvent>
        <TextTableTitleCardEvent align="right">${total}MXN</TextTableTitleCardEvent>
      </OrderProductsRow>
    </CardContainer>
  );
};
