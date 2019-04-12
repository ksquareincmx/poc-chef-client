import React from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { IProduct } from "src/partner/models/Order";
import { Cell, RowProducts } from "./OrderStyles";
import { ListItemRow } from "src/partner/modules/ui/List/List";
import { Text } from '../Text'

interface IProductListProps {
  products: IProduct[];
}

export const ProductList: React.SFC<IProductListProps> = props => {
  const getProductRow = (product: IProduct) => {
    return (
      <ListItemRow key={product.orderProductId}>
        <RowProducts>
          <Cell key={`name_${product.orderProductId}`}>
            <Text>{product.name}</Text>
          </Cell>
          <Cell key={`quantity_${product.id}`} align="right">
            <Text>{product.quantity}</Text>
          </Cell>
          <Cell key={`price_${product.id}`} align="right">
            <Text>{product.price}</Text>
          </Cell>
        </RowProducts>
      </ListItemRow>
    );
  };

  return <>{props.products.map(getProductRow)}</>;
};
