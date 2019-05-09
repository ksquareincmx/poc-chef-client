import React from "react";
import { CardOrderSection, RowProducts } from "src/common/ui/Card";
import { TextTable, TextPriceTableProducts } from "src/common/ui/Text";
import { IProduct } from "src/partner/models/Product";
import { getPriceFormat } from "src/common/utils";

export interface IProductsOrderContainerProps {
  products: IProduct[];
}

export const ProductsOrderContainer: React.SFC<IProductsOrderContainerProps> = ({ products }) => {
  return (
    <CardOrderSection style={{ paddingBottom: ".5rem" }}>
      {products.map((p: IProduct) => {
        return (
          <RowProducts key={p.id}>
            <TextTable style={{ textAlign: "left" }}>{p.name}</TextTable>
            <TextPriceTableProducts style={{ textAlign: "right", paddingRight: "1rem" }}>
              {getPriceFormat(p.price * p.quantity)}
            </TextPriceTableProducts>
          </RowProducts>
        );
      })}
    </CardOrderSection>
  );
};
