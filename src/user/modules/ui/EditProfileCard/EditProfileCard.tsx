import React, { ChangeEvent } from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

export const Card = styledComponents.div({
  display: "flex",
  flexDirection: "column",
  width: "21.4375rem",
  height: "22.25rem",
  borderRadius: "0.25rem",
  background: "white",
  margin: "0 auto",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
});

export const CardNavIconContainer = styledComponents.div({
  display: "flex",
  height: "2.5rem",
  flexDirection: "row",
  justifyContent: "flex-end",
});

export const CardNavIcon = styledComponents.img({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
  marginTop: "1rem",
  marginRight: "1rem",
});

export const CardUserImgContainer = styledComponents.div({
  display: "flex",
  boxSizing: "border-box",
  height: "5rem",
  width: "5rem",
  margin: "0px auto",
  borderRadius: "50%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const CardUserImg = styledComponents.img({
  height: "5rem",
  width: "5rem",
  objectFit: "contain",
});

export const CardForm = styledComponents.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  width: "15rem",
});

const LabelInput = styledComponents.label({
  lineHeight: "1.33",
  fontSize: ".75rem",
  fontFamily: "Roboto",
  height: "1rem",
  position: "relative",
  top: ".5rem",
  left: ".5rem",
  color: "#c54250",
  backgroundColor: "#fff",
  padding: "0px .5rem",
});

const Input = styledComponents.input({
  width: "100%",
  height: "2.5rem",
  borderRadius: ".25rem",
  border: "1px solid #ccc",
  padding: ".5rem 1rem",
  boxSizing: "border-box",
  fontSize: ".875rem",
  color: "#515354",
  lineHeight: "1.71",
});

interface IInputProps {
  value: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface ICardFormItemProps {
  label: string;
  inputProps: IInputProps;
}

export const CardFormItem: React.FC<ICardFormItemProps> = ({ label, inputProps }) => {
  return (
    <div style={{ margin: "0px auto 8px" }}>
      <LabelInput>{label}</LabelInput>
      <Input {...inputProps} />
    </div>
  );
};
