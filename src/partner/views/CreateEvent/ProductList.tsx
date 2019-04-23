import React, { ChangeEvent } from "react";
import { IObjectProducts } from "./CreateEvent";
import { ProductRow } from "./ProductRow";

export interface IProductListProps {
  products: IObjectProducts;
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
        const { description, amount } = products[uuid];
        return (
          <ProductRow
            key={uuid}
            {...{
              uuid,
              descriptionValue: description,
              descriptionOnChange: onChangeProductDescription,
              amountValue: amount,
              amountOnchange: onChangeProductAmount,
            }}
          />
        );
      })}
    </React.Fragment>
  );
};
