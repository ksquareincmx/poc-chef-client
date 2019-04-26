import React, { ChangeEvent } from "react";
import { ProductRow } from "./ProductRow";
import { product, IProduct } from "src/partner/models/Product";

export interface IProductListProps {
  products: { [uuid: string]: IProduct };
  onChangeProductDescription: (uuid: string, ev: ChangeEvent<HTMLInputElement>) => void;
  onChangeProductAmount: (uuid: string, ev: ChangeEvent<HTMLInputElement>) => void;
}

export const ProductList: React.SFC<IProductListProps> = ({
  products,
  onChangeProductDescription,
  onChangeProductAmount,
}) => {
  return (
    <React.Fragment>
      {Object.keys(products).map((uuid: string) => {
        const { description, price } = products[uuid];
        return (
          <ProductRow
            key={uuid}
            {...{
              uuid,
              descriptionValue: description,
              descriptionOnChange: onChangeProductDescription,
              amountValue: price,
              amountOnchange: onChangeProductAmount,
            }}
          />
        );
      })}
    </React.Fragment>
  );
};
