import React, { Fragment } from "react";
import { Header } from "src/partner/modules/Header";
import { ContentWrapper } from "src/common/ui/ContentWrapper";
import { EventsContainer } from "src/user/modules/EventsContainer";

export const Events: React.FC = () => {
  return (
    <Fragment>
      <Header title="Events" userStyle={true} />
      <ContentWrapper>
        <EventsContainer />
      </ContentWrapper>
    </Fragment>
  );
};
