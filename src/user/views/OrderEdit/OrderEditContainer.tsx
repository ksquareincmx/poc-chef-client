import React from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { GradientButton } from "src/common/ui/Buttons";
import { TextTable, TextTitleCardEvent } from "src/common/ui/Text";
import { ProductsListContainer } from "src/user/modules/ProductsEditListContainer";

export const OrderEditContainer: React.FC = () => {
  //temporal
  const data = {
    eventName: "EventName",
    dateOrdered: "27/07/2018",
    order: "012",
    total: "50.00",
    products: [
      {
        id: "8a8a8aa",
        name: "Torta de poc-chuc",
        price: "22.00",
        units: "0",
      },
      {
        id: "5a6a6a6",
        name: "Torta de poc-chuc",
        price: "32.00",
        units: "1",
      },
      {
        id: "5a5a5a666",
        name: "Torta de poc-chuc",
        price: "108.00",
        units: "2",
      },
    ],
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
            <TextTitleCardEvent>{data.eventName}</TextTitleCardEvent>
            <TextTable style={{ textAlign: "left" }}>{data.dateOrdered}</TextTable>
          </div>
          <TextTable style={{ textAlign: "left" }}>Order #{data.order}</TextTable>
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
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <GradientButton onClick={saveChanges}>SAVE CHANGES</GradientButton>
      </div>
    </React.Fragment>
  );
};
