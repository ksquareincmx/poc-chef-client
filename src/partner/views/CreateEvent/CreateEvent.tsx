import React, { useState, ChangeEvent, useEffect } from "react";
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
import { currentEventsRoute, eventEditRoute } from "src/partner/routes";

const CustomText = styles(TextMessage)`
    color: #fff;
    line-height: normal;
    font-size: .875rem;
`;

interface IRouteProps {
  match: { params: { id?: string } };
}
export const CreateEvent: React.FC<RouteComponentProps & IRouteProps> = ({ history, match }) => {
  const [state, setState] = useState<IEvent>(event());
  const isEditRoute = match.path === eventEditRoute;

  const fetchEvent = async () => {
    if (isEditRoute && match.params.id) {
      const eventId = match.params.id;
      const eventData = await eventService.getEventById(eventId);
      setState({ ...eventData });
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

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
    let res;
    if (isEditRoute) {
      res = await eventService.putEvent({ ...state });
    } else {
      res = await eventService.postEvent({ ...state });
    }
    if (res) {
      history.push(currentEventsRoute);
    }
  };

  return (
    <React.Fragment>
      <NavHeader title={`${isEditRoute ? `Edit` : `New`} Event`} to={currentEventsRoute} />
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
            <CustomText>{isEditRoute ? "UPDATE" : "SAVE"} EVENT</CustomText>
          </GradientButton>
        </div>
      </FloatContentWrapper>
    </React.Fragment>
  );
};
