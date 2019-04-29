import styles from "styled-components";

export const Input = styles.input({
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

export const LabelInput = styles.label({
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

export const InputContainer = styles.div({
  position: "relative",
  top: "-.5rem",
});
