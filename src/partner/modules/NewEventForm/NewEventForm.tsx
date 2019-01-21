import React from "react";
import styled from "@emotion/styled";
import { CardContainer, RowDataContainer } from "../ui/Commons/Commons";

const Label = styled.p({
  fontFamily: "roboto",
  fontWeight: "normal",
  fontSize: "16px"
});

const Input = styled.input({
  height: "18px",
  background: "skyblue"
});

const NewEventForm = () => {
  return (
    <div>
      <CardContainer>
        <RowDataContainer>
          <Label>Event Name</Label>
          <Input type="text" name="eventname" />
        </RowDataContainer>
        <RowDataContainer>
          <input type="submit" />
        </RowDataContainer>
      </CardContainer>
    </div>
  );
};

export default NewEventForm;
