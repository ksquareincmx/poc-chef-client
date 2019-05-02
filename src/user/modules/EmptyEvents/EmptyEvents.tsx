import React from "react";
import { EmptyData } from "src/common/views/EmptyData";

export const EmptyEvents: React.FC = () => {
  return (
    <EmptyData
      title="There is no Events make you happy day!"
      img={require("src/images/pork_sad.svg")}
      textBottom="Please come back later :)"
    />
  );
};
