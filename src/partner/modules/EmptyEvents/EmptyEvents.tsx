import React from "react";
import { EmptyData } from "src/common/views/EmptyData";
import { CreateEventButton } from "../CreateEventButton";

export const EmptyEvents: React.SFC = () => {
  return (
    <EmptyData
      title={"You have no events yet"}
      img={require("src/images/pork.svg")}
      button={<CreateEventButton />}
    />
  );
};
