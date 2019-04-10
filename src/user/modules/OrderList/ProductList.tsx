import React from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { IProduct } from "src/partner/models/Order";
import { Cell, RowProducts } from "./OrderStyles";
import { ListItemRow } from "src/partner/modules/ui/List/List";

interface IProductListProps {
  products: IProduct[];
}

const Text = styledComponentsTS(styledComponents.div)`
  font-size: 12px;
  margin: 0;
  color: #515354;
`;



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
