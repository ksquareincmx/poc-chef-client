import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { InputContainer, LabelInput, Input } from "../ui/LabelInput";

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
