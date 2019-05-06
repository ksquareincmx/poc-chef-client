import React from "react";
import { ProductEditRow } from "./ProductEditRow";
import { IOrderProduct } from "src/user/models/OrderProduct";

interface IProductsListContainerProps {
  products: { [uuid: string]: IOrderProduct };
  handleAddUnit: (id: string) => void;
  handleMinusUnit: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  handleOnChangeInput: (id: string) => void;
  enableDeleteButton?: boolean;
}
export const ProductsListContainer: React.FC<IProductsListContainerProps> = ({
  products,
  ...props
}) => {
  return (
    <React.Fragment>
      {Object.keys(products).map((uuid: string) => (
        <ProductEditRow product={products[uuid]} key={products[uuid].id} {...props} />
      ))}
    </React.Fragment>
  );
};
