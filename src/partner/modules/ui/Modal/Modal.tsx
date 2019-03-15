import React from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { H1 } from "../List/List";

const ModalContainer = styledComponentsTS(styledComponents.div)`
  display: flex;
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styledComponents.div`
  width:300px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
`;

const ModalTitle = styledComponents.div`
  font-size: 14px;
  padding:5px;
  border-bottom: 1px solid #ccc;
  display: grid;
  grid-template-columns: 11fr 1fr;
`;
const ModalBody = styledComponents.div`
  padding:5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styledComponents.button`
  font-size: 1.5em;
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;

const ModalFooter = styledComponents.div`
  border-top:1px solid #ccc;
  padding: 5px;
`;

interface IModalProps {
  show: boolean;
  title: string;
  closeModal: Function;
  footer?: boolean;
  children?: any;
}

export const Modal: React.SFC<IModalProps> = props => {
  return (
    (props.show && (
      <ModalContainer>
        <ModalWrapper>
          <ModalTitle>
            <H1 align="left" alternativeColor>
              {props.title}
            </H1>
            <CloseButton onClick={() => props.closeModal()}>X</CloseButton>
          </ModalTitle>
          <ModalBody>{props.children}</ModalBody>
          {props.footer && <ModalFooter>{props.footer}</ModalFooter>}
        </ModalWrapper>
      </ModalContainer>
    )) ||
    null
  );
};
