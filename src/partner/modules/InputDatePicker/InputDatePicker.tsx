import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import styledTS from "styled-components-ts";

interface IDatePickerStyled {
  inputStyle?: string;
  [key: string]: any;
}

const DatePickerStyled = styledTS<IDatePickerStyled>(styled(DatePicker))`
  ${({ inputStyle }) => inputStyle || ""}
  & :after{
    content: "icon";
  }
`;

interface IInputDatePicker {
  style?: string;
  onChange: (date: Date) => void;
  selected: Date;
  dateFormat?: string;
  [key: string]: any;
}

export const InputDatePicker: React.FC<IInputDatePicker> = props => {
  return (
    <React.Fragment>
      {props.inputStyle && (
        <style>{`.react-datepicker-wrapper{display:block} .react-datepicker__input-container{ position: static; display:block;}`}</style>
      )}
      <DatePickerStyled {...props} />
    </React.Fragment>
  );
};
