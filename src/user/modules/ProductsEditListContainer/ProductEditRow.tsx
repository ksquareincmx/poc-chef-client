import React, { useState } from "react";
import { IOrderProduct } from "src/user/models/OrderProduct";
import {
  UnitsContainer,
  Icons,
  InputUnits,
  DivWrapper,
  CustomProductRow,
  TextTableProduct,
  ExtraButtonDivRelative,
  ExtraButtonInnerDivAbsolute,
  DivDelete,
} from "../ui/ProductEditRow";

interface IProductRowProps {
  product: IOrderProduct;
  handleAddUnit: (id: string) => void;
  handleMinusUnit: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  handleOnChangeInput: (id: string) => void;
}

export const ProductEditRow: React.FC<IProductRowProps> = ({
  product,
  handleMinusUnit,
  handleAddUnit,
  handleRemoveProduct,
  handleOnChangeInput,
}) => {
  const [left, setLeft] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);

  const onTouchMove = (ev: any) => {
    const currentPositionX = ev.changedTouches[0].pageX;
    const diff = currentPositionX - initialPosition;
    if (diff < -50) {
      return;
    }
    setLeft(diff > 0 ? 0 : diff);
  };

  const onTouchStart = (ev: any) => {
    setInitialPosition(ev.changedTouches[0].pageX);
  };

  return (
    <DivWrapper>
      <CustomProductRow onTouchMove={onTouchMove} onTouchStart={onTouchStart} style={{ left }}>
        <TextTableProduct textAlign="left">{product.name}</TextTableProduct>
        <TextTableProduct textAlign="right">${product.price} MXN</TextTableProduct>
        <UnitsContainer>
          <Icons
            onClick={handleMinusUnit.bind(null, product.id)}
            src={require(`src/images/icons/remove_circle${
              product.quantity === 0 ? "_gray" : ""
            }.svg`)}
          />
          <InputUnits
            onChange={handleOnChangeInput.bind(null, product.id)}
            value={product.quantity}
          />
          <Icons
            onClick={handleAddUnit.bind(null, product.id)}
            src={require("src/images/icons/add_circle.svg")}
          />
        </UnitsContainer>
        <ExtraButtonDivRelative>
          <ExtraButtonInnerDivAbsolute
            style={{ width: -left }}
            onClick={handleRemoveProduct.bind(null, product.id)}
          >
            <DivDelete />
          </ExtraButtonInnerDivAbsolute>
        </ExtraButtonDivRelative>
      </CustomProductRow>
    </DivWrapper>
  );
};
