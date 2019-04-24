import React from "react";
import styled from "styled-components";
import { CardRow } from "src/common/ui/Card";
import { TextTable } from "src/partner/modules/ui/Text";

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
  return (
    <CardRow>
      <TextTable style={{ margin: "auto 0px" }}>{product.name}</TextTable>
      <TextTable style={{ margin: "auto 0px" }}>${product.price} MXN</TextTable>
      <UnitsContainer>
        <Icons
          onClick={handleMinusUnit.bind(null, product.id)}
          src={require("src/images/icons/remove_circle.svg")}
        />
        <InputUnits onChange={handleOnChangeInput.bind(null, product.id)} value={product.units} />
        <Icons
          onClick={handleAddUnit.bind(null, product.id)}
          src={require("src/images/icons/add_circle.svg")}
        />
      </UnitsContainer>
    </CardRow>
  );
};
