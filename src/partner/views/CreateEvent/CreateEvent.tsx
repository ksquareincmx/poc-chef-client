import React, { useState, ChangeEvent } from "react";
import { NavHeader } from "src/partner/modules/Header";
import { FloatContentWrapper } from "src/partner/modules/ui";
import { CreateEventContainer } from "./CreateEventContainer";
import { GradientButton } from "src/common/ui/Buttons";
import styles from "styled-components";
import { TextMessage } from "src/common/ui/Text";
import cuid from "cuid";

const CustomText = styles(TextMessage)`
    color: #fff;
    line-height: normal;
    font-size: .875rem;
`;
export interface IObjectProducts {
  [key: string]: IProductData;
}

export interface IProductData {
  description: string;
  amount: string;
}

export interface ICreateEventState {
  name: string;
  expirationDate: string;
  time: string;
  productList: IObjectProducts;
}

const createEventInitialState: ICreateEventState = {
  name: "",
  expirationDate: "",
  time: "",
  productList: {},
};

export const CreateEvent: React.FC = () => {
  const [state, setState] = useState<ICreateEventState>(createEventInitialState);

  const addProductHandler = () => {
    const uuid = cuid();
    setState({
      ...state,
      productList: { ...state.productList, [uuid]: { description: "", amount: "0" } },
    });
  };

  const onChangeProductDescription = (uuid: string, ev: any) => {
    const data = state.productList[uuid];
    data.description = ev.target.value;
    setState({ ...state, productList: { ...state.productList, [uuid]: { ...data } } });
  };

  const onChangeProductAmount = (uuid: string, ev: any) => {
    const data = state.productList[uuid];
    data.amount = ev.target.value;
    setState({ ...state, productList: { ...state.productList, [uuid]: { ...data } } });
  };

  const changeEventNameHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, name: ev.target.value });
  };

  const changeEventExpirationDateHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, expirationDate: ev.target.value });
  };

  const changeEventTimeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, time: ev.target.value });
  };

  const handleSaveEvent = () => {
    //save the event
  };

  return (
    <React.Fragment>
      <NavHeader title="New Event" to="current-events" />
      <FloatContentWrapper>
        <CreateEventContainer
          {...{
            state,
            addProductHandler,
            onChangeProductDescription,
            onChangeProductAmount,
            changeEventNameHandler,
            changeEventExpirationDateHandler,
            changeEventTimeHandler,
          }}
        />
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <GradientButton onClick={handleSaveEvent}>
            <CustomText>SAVE EVENT</CustomText>
          </GradientButton>
        </div>
      </FloatContentWrapper>
    </React.Fragment>
  );
};
