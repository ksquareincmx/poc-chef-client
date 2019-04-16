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
  width: "343px",
});

export const ImgIcon = styledComponentsTS(styledComponents.img)`
    margin: 0px auto;
    height: ${({ height }) => height || "auto"};
  `;
export const InputField = styledComponents.input({
  width: "240px",
  height: "40px",
  fontSize: "14px",
  borderRadius: "4px",
  textAlign: "left",
  fontColor: "#fff",
  border: "solid 1px #cccccc",
  padding: "0px 10px",
});

export const ButtonSubmit = styledComponents.button({
  ...flatElement,
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  backgroundImage: "linear-gradient(to right, #f8823d, #e83f5d)",
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
  width: "343px",
  height: "184px",
  borderRadius: "4px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
  display: "flex",
  padding: "15px 0px",
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const LoginContainer = styledComponents.div({
  display: "grid",
  gridRowGap: "16px",
});
