import React from "react";
import { IProduct } from "src/partner/models/Order";
import { Cell, RowProducts } from "./OrderStyles";
import { ListItemRow } from "src/partner/modules/ui/List/List";

interface IProductListProps {
  products: IProduct[];
}

export const ProductList: React.SFC<IProductListProps> = props => {
  const getProductRow = (product: IProduct) => {
    return (
      <ListItemRow key={product.orderProductId}>
        <RowProducts>
          <Cell key={`name_${product.orderProductId}`}>{product.name}</Cell>
          <Cell key={`quantity_${product.id}`} align="right">
            {product.quantity}
          </Cell>
          <Cell key={`price_${product.id}`} align="right">
            {product.price}
          </Cell>
        </RowProducts>
      </ListItemRow>
    );
  };

  return <>{props.products.map(getProductRow)}</>;
};
