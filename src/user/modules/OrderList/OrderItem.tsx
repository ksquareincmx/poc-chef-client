import React from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { TextTable, TextTitleCardEvent, TextTableTitleCardEvent } from "src/common/ui/Text";
import { IOrder } from "src/user/models/Order";
import { OrderDescription, OrderProductsRow, EditIcon } from "../ui/OrderItem";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import { USER_ORDER_EDIT_ROUTE } from "src/user/routes";
import { DateMapper } from "src/common/mappers";
import { getPriceFormat } from "src/common/utils";

export interface IOrderItem {
  order: IOrder;
  historyView: boolean;
}

export const OrderItem: React.FC<IOrderItem> = ({
  historyView,
  order: { id, eventName, createdAt, orderNumber, products, total },
}) => {
  const units = Object.keys(products).reduce((a, b) => a + products[b].quantity, 0);
  return (
    <CardContainer>
      <CardRowHeader>
        <OrderDescription>
          <TextTitleCardEvent align="left">{eventName}</TextTitleCardEvent>
          <TextTable align="left">{DateMapper.unixDateToString(createdAt)}</TextTable>
          <TextTable align="left">order #{orderNumber}</TextTable>
        </OrderDescription>
        <div>
          {!historyView && (
            <Link to={USER_ORDER_EDIT_ROUTE.replace(":id", id)}>
              <EditIcon src={require("src/images/icons/edit_gray.svg")} />
            </Link>
          )}
        </div>
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
        <TextTableTitleCardEvent align="right">{getPriceFormat(total)}</TextTableTitleCardEvent>
      </OrderProductsRow>
    </CardContainer>
  );
};
