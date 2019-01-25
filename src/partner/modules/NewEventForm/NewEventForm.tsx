import React from "react";
import styled from "@emotion/styled";
import { P } from "../ui/List/List";
import { ListItem } from "../ui/List/List";

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
      <ListItem>
        <P>
          <Label>Event Name</Label>
          <Input type="text" name="eventname" />
        </P>
        <P>
          <input type="submit" />
        </P>
      </ListItem>
    </div>
  );
};

export default NewEventForm;
