import React from "react";
import styledComponents from "styled-components";
import { TextTitleHeader, TextMessage } from "src/common/ui/Text";

export interface INotificationProps {
  text: string;
  close: Function;
}

const NotificacionDiv = styledComponents.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 1rem 1rem 1rem 1.5rem;
  position: fixed;
  bottom: 2.5rem;
  left: 0px;
  z-index: 999;
  background-color: #4b4b4b;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonClose = styledComponents.div`
  color: #fff;
  width: 1.5rem;
  height: 1.5rem;
`;

const ImgClose = styledComponents.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const TextNotification = styledComponents(TextMessage)`
  color: #fff;
  font-size: .75rem;
  line-height: 1.33;
`;

export const Notification: React.SFC<INotificationProps> = props => {
  return (
    <NotificacionDiv>
      <TextNotification>{props.text}</TextNotification>
      <ButtonClose onClick={() => props.close()}>
        <ImgClose src={require("src/images/icons/clear.svg")} />
      </ButtonClose>
    </NotificacionDiv>
  );
};
