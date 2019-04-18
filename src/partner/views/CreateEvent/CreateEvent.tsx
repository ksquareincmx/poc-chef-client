import React, { useReducer } from "react";
import { Header } from "src/partner/modules/Header";
import { FloatContentWrapper } from "src/partner/modules/ui";
import { CreateEventContainer } from "./CreateEventContainer";
import { GradientButton } from "src/partner/modules/ui/Buttons";
import styles from "styled-components";
import { TextMessage } from "src/partner/modules/ui/Text";
import { event } from "src/partner/models/Event";
import { IEvent } from "src/partner/models";
import { IFluxStandardAction } from "src/common/ducks";

const CustomText = styles(TextMessage)`
    color: #fff;
    line-height: normal;
    font-size: .875rem;
`;

const initialCreateEventState: IEvent.IEvent = event();
const createEventReducer = (state: IEvent.IEvent, action: IFluxStandardAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const CreateEvent: React.SFC = () => {
  //const [eventState, dispatch] = useReducer(initialCreateEventState, createEventReducer);

  return (
    <React.Fragment>
      <Header title="New Event" />
      <FloatContentWrapper>
        <CreateEventContainer />
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <GradientButton>
            <CustomText>SAVE EVENT</CustomText>
          </GradientButton>
        </div>
      </FloatContentWrapper>
    </React.Fragment>
  );
};
