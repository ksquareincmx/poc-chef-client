import React, { useState } from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { GradientButton } from "src/common/ui/Buttons";
import { TextTable, TextTitleCardEvent, TextTableTitleCardEvent } from "src/common/ui/Text";
import { ProductsListContainer } from "src/user/modules/ProductsEditListContainer";
import { DateMapper } from "src/common/mappers/";
import { CustomProductRow } from "../ui/ProductEditRow";
import { IUserEvent } from "src/user/models/UserEvent";
import styled from "styled-components";
import styledTS from "styled-components-ts";

interface ICustomTextTableTitleCardEvent {
  align?: string;
}
const CustomTextTableTitleCardEvent = styledTS<ICustomTextTableTitleCardEvent>(
  styled(TextTableTitleCardEvent),
)` text-align: ${({ align }) => align || "left"};`;

interface IEventProps {
  event: IUserEvent;
}

export const EventCard: React.FC<IEventProps> = ({ event }) => {
  const [state, setState] = useState<IUserEvent>(event);

  const handleAddUnit = (idProduct: string) => {
    const dataProduct = { ...state.products[idProduct] };
    dataProduct.quantity += 1;
    setState({ ...state, products: { ...state.products, [idProduct]: { ...dataProduct } } });
  };

  const handleMinusUnit = (idProduct: string) => {
    const dataProduct = { ...state.products[idProduct] };

    if (dataProduct.quantity === 0) {
      return;
    }

    dataProduct.quantity -= 1;
    setState({ ...state, products: { ...state.products, [idProduct]: { ...dataProduct } } });
  };

  const handleRemoveProduct = (idProduct: string) => {
    //handleRemoveProduct
  };

  const saveChanges = () => {
    //save order changes
  };

  const handleOnChangeInput = (idProduct: string) => {
    //handle onChange product
  };

  return (
    <React.Fragment>
      <CardContainer>
        <CardRowHeader style={{ padding: ".5rem 1rem .475rem 1rem" }}>
          <div style={{ display: "grid", gridGap: ".25rem" }}>
            <CustomTextTableTitleCardEvent>{state.name}</CustomTextTableTitleCardEvent>
            <TextTable style={{ textAlign: "left" }}>
              {DateMapper.unixDateToString(state.createdAt)}
            </TextTable>
          </div>
        </CardRowHeader>
        <CustomProductRow>
          <CustomTextTableTitleCardEvent>Product</CustomTextTableTitleCardEvent>
          <CustomTextTableTitleCardEvent align="right">Price</CustomTextTableTitleCardEvent>
          <span />
        </CustomProductRow>
        <ProductsListContainer
          products={state.products}
          handleAddUnit={handleAddUnit}
          handleMinusUnit={handleMinusUnit}
          handleRemoveProduct={handleRemoveProduct}
          handleOnChangeInput={handleOnChangeInput}
        />
        <div style={{ textAlign: "center", padding: ".5rem 0px" }}>
          <GradientButton style={{ width: "auto", padding: "0px 1rem" }} onClick={saveChanges}>
            SUBMIT HAPPINESS
          </GradientButton>
        </div>
      </CardContainer>
    </React.Fragment>
  );
};
