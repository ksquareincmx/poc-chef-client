import React, { ChangeEvent } from "react";
import { TextTableTitleCardEvent } from "src/common/ui/Text";
import styles from "styled-components";
import { InputLabel } from "src/partner/modules/InputLabel/InputLabel";
import { ICreateEventState } from "./CreateEvent";
import {
  CardContainer,
  CardRowHeader,
  CardDivActionsContainer,
  CardRow,
  CardIconImg,
  CardTextHeaderContainer,
} from "src/common/ui/Card";
import { ProductList } from "./ProductList";
import { InputDatePicker } from "src/partner/modules/InputDatePicker";
import { LabelInput, InputContainer } from "src/partner/modules/ui/LabelInput";

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
  changeEventExpirationDateHandler: (date: Date) => void;
  changeEventTimeHandler: (date: Date) => void;
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
        <CardTextHeaderContainer>
          <TextTableTitleCardEvent>Event Creator</TextTableTitleCardEvent>
        </CardTextHeaderContainer>
        <CardDivActionsContainer>
          <span />
          <CardIconImg
            width="1.5rem"
            height="1.5rem"
            src={require("src/images/icons/baseline-delete-24px.svg")}
            alt="del-botton"
          />
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
          <InputContainer>
            <LabelInput>Date Expiration</LabelInput>
            <InputDatePicker
              inputStyle="width: 9.1875rem; box-sizing: border-box; height: 2.5rem"
              onChange={changeEventExpirationDateHandler}
              selected={state.expirationDate}
            />
          </InputContainer>
          <InputContainer>
            <LabelInput>Time</LabelInput>
            <InputDatePicker
              inputStyle="width: 7rem; box-sizing: border-box; height: 2.5rem"
              onChange={changeEventExpirationDateHandler}
              selected={state.time}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
            />
          </InputContainer>
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
