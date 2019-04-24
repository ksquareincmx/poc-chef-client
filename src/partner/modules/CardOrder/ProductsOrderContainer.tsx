import React from "react";
import { CardOrderSection, RowProducts } from "src/common/ui/Card";
import { TextTableProducts, TextPriceTableProducts } from "../ui/Text";

export interface IProductsOrderContainerProps {
  products: any; //temporal
}

export const ProductsOrderContainer: React.SFC<IProductsOrderContainerProps> = ({ products }) => {
  return (
    <CardOrderSection style={{ paddingBottom: ".5rem" }}>
      {products.map((p: any) => {
        return (
          <RowProducts key={p.id}>
            <TextTableProducts style={{ textAlign: "left" }}>{p.name}</TextTableProducts>
            <TextPriceTableProducts style={{ textAlign: "right", paddingRight: "1rem" }}>
              ${p.amount} MXN
            </TextPriceTableProducts>
          </RowProducts>
        );
      })}
    </CardOrderSection>
  );
};
