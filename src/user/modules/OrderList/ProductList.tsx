import React from "react";
import { IOrderProduct } from "src/user/models/OrderProduct";
import { OrderProductsRow } from "../ui/OrderItem";
import { TextTableRowCardEvent } from "src/common/ui/Text";

interface IProductListProps {
  products: { [key: string]: IOrderProduct };
}

export const ProductList: React.SFC<IProductListProps> = ({ products }) => {
  const getProductRow = (product: IOrderProduct) => {
    return (
      <OrderProductsRow key={product.id}>
        <TextTableRowCardEvent align="left">{product.name}</TextTableRowCardEvent>
        <TextTableRowCardEvent align="right">{product.quantity}</TextTableRowCardEvent>
        <TextTableRowCardEvent align="right">${product.subtotal} MXN</TextTableRowCardEvent>
      </OrderProductsRow>
    );
  };

  return (
    <React.Fragment>
      {Object.keys(products).map(key => getProductRow(products[key]))}
    </React.Fragment>
  );
};
