import React from "react";
import { ProductEditRow } from "./ProductEditRow";

interface IProductsListContainerProps {
  products: any; //temporal
  handleAddUnit: (id: string) => void;
  handleMinusUnit: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  handleOnChangeInput: (id: string) => void;
}
export const ProductsListContainer: React.FC<IProductsListContainerProps> = ({
  products,
  ...props
}) => {
  return (
    <React.Fragment>
      {products.map((product: any) => (
        <ProductEditRow product={product} key={product.id} {...props} />
      ))}
    </React.Fragment>
  );
};
