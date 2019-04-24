import React from "react";
import { CardOrderSection, RowProducts } from "src/common/ui/Card";
import { TextTable, TextPriceTableProducts } from "src/common/ui/Text";

export interface IProductsOrderContainerProps {
  products: any; //temporal
}

export const ProductsOrderContainer: React.SFC<IProductsOrderContainerProps> = ({ products }) => {
  return (
    <CardOrderSection style={{ paddingBottom: ".5rem" }}>
      {products.map((p: any) => {
        return (
          <RowProducts key={p.id}>
            <TextTable style={{ textAlign: "left" }}>{p.name}</TextTable>
            <TextPriceTableProducts style={{ textAlign: "right", paddingRight: "1rem" }}>
              ${p.amount} MXN
            </TextPriceTableProducts>
          </RowProducts>
        );
      })}
    </CardOrderSection>
  );
};
