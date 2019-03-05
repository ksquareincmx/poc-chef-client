import React from "react";
import styledComponents from "styled-components";

export interface INotificationProps {
  text: string;
  close: Function;
}

const NotificacionDiv = styledComponents.div`
  width: calc(100vw - 30px);
  padding: 15px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  background-color: #4b4b4b;
  color: #fff;
  display: grid;
  grid-template-columns: 11fr 1fr;

  > div{
    align-self: center;
  }
`;

const ButtonClose = styledComponents.button`
  color: #fff;
  border-radius: 15px;
  width: 60px;
  height: 40px;
  border: 2px solid #fff;
  background-color: #4b4b4b;
`;

export const Notification: React.SFC<INotificationProps> = props => {
  return (
    <NotificacionDiv>
      <div>{props.text}</div>
      <ButtonClose onClick={() => props.close()}>OK</ButtonClose>
    </NotificacionDiv>
  );
};
