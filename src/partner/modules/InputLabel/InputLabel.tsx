import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "styled-components";

const Input = styles.input({
  width: "100%",
  borderRadius: ".25rem",
  border: "1px solid #ccc",
  padding: ".5rem 1rem",
  height: "40px",
  boxSizing: "border-box",
  fontSize: ".875rem",
  color: "#515354",
  lineHeight: "1.71",
});

const LabelInput = styles.label({
  lineHeight: "1.33",
  fontSize: ".75rem",
  fontFamily: "Roboto",
  height: "1rem",
  position: "relative",
  top: ".5rem",
  left: "1rem",
  color: "#c54250",
  backgroundColor: "#fff",
  padding: "0px .5rem",
});

const InputContainer = styles.div({
  position: "relative",
  top: "-.5rem",
});
export interface InputFieldProps {
  label: string;
  width?: string;
  ref?: string;
  inputAttrs: any;
}
export const InputLabel: React.SFC<InputFieldProps> = props => {
  const { width = "100%", label, inputAttrs } = props;
  return (
    <div style={{ width }}>
      <InputContainer>
        <LabelInput>{label}</LabelInput>
        <Input {...inputAttrs} />
      </InputContainer>
    </div>
  );
};
