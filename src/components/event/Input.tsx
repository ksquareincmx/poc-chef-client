"use strict";

import * as React from "react";
import styled from "@emotion/styled";

import { IEventEntity } from "./../../interfaces/";

export const Input: React.StatelessComponent<IEventEntity> = props => {
  const Input = styled.input({
    position: "relative",
    "& :hover": {
      outline: "none",
      boxShadow: "0.2rem 0.8rem 1.6rem",
      background: "black",
      color: "red"
    }
  });
  console.log("props: ", props);
  return <div>holi</div>;
};
