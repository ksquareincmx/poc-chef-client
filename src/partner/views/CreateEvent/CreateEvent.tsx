import React from "react";
import { Header } from "src/partner/modules/Header";
import { FloatContentWrapper } from "src/partner/modules/ui";
import { CreateEventContainer } from "./CreateEventContainer";
import { GradientButton } from "src/partner/modules/ui/Buttons";
import styles from "styled-components";
import { TextMessage } from "src/partner/modules/ui/Text";

const CustomText = styles(TextMessage)`
    color: #fff;
    line-height: normal;
    font-size: .875rem;
`;

export const CreateEvent: React.SFC = () => {
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
