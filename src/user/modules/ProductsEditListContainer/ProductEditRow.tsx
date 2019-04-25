import React, { useState } from "react";
import styled from "styled-components";
import styledTS from "styled-components-ts";
import { CardRow } from "src/common/ui/Card";
import { TextTable } from "src/common/ui/Text";

const UnitsContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1rem 2.5rem 1rem;
`;
const Icons = styled.img`
  width: 1rem;
  height: 1rem;
  margin: auto 0px;
`;
const InputUnits = styled.input`
  width: 2.5rem;
  height: 2rem;
  box-sizing: border-box;
  text-align: center;
`;
const DivWrapper = styled.div`
  clip-path: inset(1px);
`;

const CustomRow = styled(CardRow)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0px;
  grid-gap: 0.125rem;
`;

interface ITextTable {
  textAlign?: string;
}
const TextTableProduct = styledTS<ITextTable>(styled(TextTable))`
  margin: auto 0px;
  text-align :${({ textAlign }) => textAlign || "center"};
`;

const ExtraButtonDivRelative = styled.div`
  position: relative;
  right: -1rem;
`;
const ExtraButtonInnerDivAbsolute = styled.div`
  position: absolute;
  height: 3.125rem;
  top: -0.4875rem;
  display: flex;
  background: #ff6200;
`;

const DivDelete = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url(${require("src/images/icons/delete_white.svg")});
  background-size: 1rem;
  margin: auto 0px auto 1rem;
`;

interface IProductRowProps {
  product: any;
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
      <CustomRow onTouchMove={onTouchMove} onTouchStart={onTouchStart} style={{ left }}>
        <TextTableProduct textAlign="left">{product.name}</TextTableProduct>
        <TextTableProduct textAlign="right">${product.price} MXN</TextTableProduct>
        <UnitsContainer>
          <Icons
            onClick={handleMinusUnit.bind(null, product.id)}
            src={require(`src/images/icons/remove_circle${product.units == 0 ? "_gray" : ""}.svg`)}
          />
          <InputUnits onChange={handleOnChangeInput.bind(null, product.id)} value={product.units} />
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
      </CustomRow>
    </DivWrapper>
  );
};
