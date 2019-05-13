import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { InputContainer, LabelInput, Input } from "../ui/LabelInput";

export interface InputFieldProps {
  label: string;
  width?: string;
  minWidth?: string;
  ref?: string;
  inputAttrs: any;
}
export const InputLabel: React.SFC<InputFieldProps> = props => {
  const { width = "100%", minWidth = "100%", label, inputAttrs } = props;

  return (
    <div style={{ width, minWidth }}>
      <InputContainer>
        <LabelInput>{label}</LabelInput>
        <Input {...inputAttrs} />
      </InputContainer>
    </div>
  );
};
