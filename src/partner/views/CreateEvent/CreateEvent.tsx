import React, { useState, ChangeEvent } from "react";
import { NavHeader } from "src/partner/modules/Header";
import { FloatContentWrapper } from "src/common/ui/ContentWrapper";
import { CreateEventContainer } from "./CreateEventContainer";
import { GradientButton } from "src/common/ui/Buttons";
import styles from "styled-components";
import { TextMessage } from "src/common/ui/Text";
import { IEvent, event } from "src/partner/models/Event";
import cuid from "cuid";
import { product } from "src/partner/models/Product";
import { eventService } from "src/partner/services/EventService";
import { RouteComponentProps } from "react-router";
import { currentEventsRoute } from "src/partner/routes";

const CustomText = styles(TextMessage)`
    color: #fff;
    line-height: normal;
    font-size: .875rem;
`;

export const CreateEvent: React.FC<RouteComponentProps> = ({ history }) => {
  const [state, setState] = useState<IEvent>(event());
  const addProductHandler = () => {
    const uuid = cuid();
    const newProduct = product();

    setState({
      ...state,
      products: { ...state.products, [uuid]: { ...newProduct } },
    });
  };

  const onChangeProductDescription = (uuid: string, ev: any) => {
    const data = state.products[uuid];
    data.name = ev.target.value;
    setState({ ...state, products: { ...state.products, [uuid]: { ...data } } });
  };

  const onChangeProductAmount = (uuid: string, ev: any) => {
    const data = state.products[uuid];
    data.price = ev.target.value;
    setState({ ...state, products: { ...state.products, [uuid]: { ...data } } });
  };

  const changeEventNameHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, name: ev.target.value });
  };

  const changeEventExpirationDateHandler = (date: Date) => {
    setState({ ...state, expirationDate: date });
  };

  const changeEventTimeHandler = (date: Date) => {
    setState({ ...state, endHour: date });
  };

  const handleSaveEvent = async () => {
    const res = await eventService.postEvent({ ...state });
    if (res) {
      history.push(currentEventsRoute);
    }
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
