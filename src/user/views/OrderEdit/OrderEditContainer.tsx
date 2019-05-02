import React from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { GradientButton } from "src/common/ui/Buttons";
import { TextTable, TextTitleCardEvent } from "src/common/ui/Text";
import { ProductsListContainer } from "src/user/modules/ProductsEditListContainer";
import { IEvent } from "src/partner/models";

export const OrderEditContainer: React.FC = () => {
  //temporal replace with order model
  const data = {
    ...IEvent.event(),
    products: {
      "8a8a8aa": {
        id: "8a8a8aa",
        name: "Torta de poc-chuc",
        price: 22,
        quantity: 0,
        subtotal: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      "5a6a6a6": {
        id: "5a6a6a6",
        name: "Torta de poc-chuc",
        price: 22,
        quantity: 0,
        subtotal: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      "5a5a5a666": {
        id: "5a5a5a666",
        name: "Torta de poc-chuc",
        price: 22,
        quantity: 0,
        subtotal: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    },
  };

  const handleAddUnit = (idProduct: string) => {
    //add unit
  };

  const handleMinusUnit = (idProduct: string) => {
    //minus unit
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
            <TextTitleCardEvent>{data.name}</TextTitleCardEvent>
            <TextTable style={{ textAlign: "left" }}>{data.createdAt}</TextTable>
          </div>
          <TextTable style={{ textAlign: "left" }}>Order #{data.id}</TextTable>
        </CardRowHeader>
        <ProductsListContainer
          products={data.products}
          handleAddUnit={handleAddUnit}
          handleMinusUnit={handleMinusUnit}
          handleRemoveProduct={handleRemoveProduct}
          handleOnChangeInput={handleOnChangeInput}
        />
        <CardRowHeader style={{ padding: ".5rem 1rem .475rem 1rem" }}>
          <TextTitleCardEvent style={{ textAlign: "left" }}>Total</TextTitleCardEvent>
          <TextTitleCardEvent style={{ textAlign: "right" }}>${data.total} MXN</TextTitleCardEvent>
        </CardRowHeader>
      </CardContainer>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <GradientButton onClick={saveChanges}>SAVE CHANGES</GradientButton>
      </div>
    </React.Fragment>
  );
};
