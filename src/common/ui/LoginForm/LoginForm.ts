import styledComponentsTS from "styled-components-ts";
import styledComponents from "styled-components";

export const flatElement = {
  minWidth: "260px",
  minHeight: "48px",
  borderRadius: "24px",
  border: "0px",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
};

export const WrapperDiv = styledComponents.div({
  display: "grid",
  gridRowGap: "1rem",
  textAlign: "center",
  maxWidth: "260px",
});

export const ImgIcon = styledComponentsTS(styledComponents.img)`
    margin: 0px auto;
    height: ${({ height }) => height || "auto"};
  `;
export const InputField = styledComponents.input({
  ...flatElement,
  textAlign: "center",
  fontColor: "#fff",
});
export const ButtonSubmit = styledComponents.button({
  ...flatElement,
  backgroundColor: "#e83e5d",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
});

export const ButtonGoogleLogin = styledComponents.button({
  ...flatElement,
  backgroundColor: "#da4733",
  color: "#fff",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const LoginForm = styledComponents.form({
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  gridRowGap: "16px",
});
