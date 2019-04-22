import React, { ChangeEvent } from "react";
import { TextTableTitleCardEvent } from "src/partner/modules/ui/Text";
import styles from "styled-components";
import { InputLabel } from "src/partner/modules/InputLabel/InputLabel";
import { ICreateEventState } from "./CreateEvent";
import {
  CardContainer,
  CardRowHeader,
  CardDivActionsContainer,
  CardRow,
  CardIconImg,
} from "src/partner/modules/ui";
import { ProductList } from "./ProductList";

const CardSection = styles.div({
  padding: ".90625rem 2rem .5rem 2rem",
});

const CustomRow = styles(CardRow)`
    padding: 0px;
    border: none;
`;

const AddButton = styles.button({
  color: "#e83f5d",
  fontSize: ".875rem",
  fontWeight: "bold",
  lineHeight: "1.71",
  border: "0px",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
});

const ProductListContainer = styles.div({
  overflowY: "auto",
  maxHeight: "calc(100vh - 28rem)",
});

export interface ICreateEventContainerProps {
  state: ICreateEventState;
  addProductHandler: () => void;
  onChangeProductDescription: (id: string, ev: ChangeEvent<HTMLInputElement>) => void;
  onChangeProductAmount: (id: string, ev: ChangeEvent<HTMLInputElement>) => void;
  changeEventNameHandler: (ev: ChangeEvent<HTMLInputElement>) => void;
  changeEventExpirationDateHandler: (ev: ChangeEvent<HTMLInputElement>) => void;
  changeEventTimeHandler: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export const CreateEventContainer: React.SFC<ICreateEventContainerProps> = props => {
  const {
    state,
    addProductHandler,
    onChangeProductDescription,
    onChangeProductAmount,
    changeEventNameHandler,
    changeEventExpirationDateHandler,
    changeEventTimeHandler,
  } = props;

  return (
    <CardContainer>
      <CardRowHeader>
        <TextTableTitleCardEvent>Event Creator</TextTableTitleCardEvent>
        <CardDivActionsContainer>
          <span />
          <CardIconImg src={require("src/images/icons/baseline-delete-24px.svg")} />
        </CardDivActionsContainer>
      </CardRowHeader>
      <CardSection>
        <CustomRow>
          <InputLabel
            label="Event Name"
            inputAttrs={{ value: state.name, onChange: changeEventNameHandler }}
          />
        </CustomRow>
        <CustomRow>
          <InputLabel
            width="9.1875rem"
            label="Expiration Date"
            inputAttrs={{
              value: state.expirationDate,
              type: "date",
              onChange: changeEventExpirationDateHandler,
            }}
          />
          <InputLabel
            width="7rem"
            label="Time"
            inputAttrs={{ value: state.time, type: "time", onChange: changeEventTimeHandler }}
          />
        </CustomRow>
      </CardSection>
      <CardSection>
        <CustomRow>
          <span />
          <AddButton onClick={addProductHandler}>
            <CardIconImg src={require("src/images/icons/baseline-add_circle_outline-24px.svg")} />
            Add Item
          </AddButton>
        </CustomRow>
        <ProductListContainer>
          <ProductList
            {...{ products: state.productList, onChangeProductDescription, onChangeProductAmount }}
          />
        </ProductListContainer>
      </CardSection>
    </CardContainer>
  );
};
