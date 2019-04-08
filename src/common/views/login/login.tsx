import React, { useState, useContext } from "react";
import { loginService } from "src/common/services";
import styledComponentsTS from "styled-components-ts";
import styledComponents from "styled-components";
import { ILoginResponse } from "src/common/models/Login";
import { RouteComponentProps } from "react-router-dom";
import { UserContext } from "src/common/providers/";

const DivContainer = styledComponents.div({
  height: "100vh",
  width: "100vw",
  backgroundImage: "linear-gradient(to bottom, #e83e5d, #f8823d)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Roboto"
});

const flatElement = {
  minWidth: "260px",
  minHeight: "48px",
  borderRadius: "24px",
  border: "0px",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)"
};

const WrapperDiv = styledComponents.div({
  display: "grid",
  gridTemplateRows: "auto repeat(4, 1fr) auto",
  gridRowGap: "16px"
});

const ImgLogo = styledComponents.img({
  minWidth: "262.92px",
  minHeight: "92.6px"
});

const ImgIcon = styledComponentsTS(styledComponents.img)`
  margin: 0px auto;
  height: ${({ height }) => height || "auto"};
`;
const InputField = styledComponents.input({
  ...flatElement,
  textAlign: "center",
  fontColor: "#fff"
});
const ButtonSubmit = styledComponents.button({
  ...flatElement,
  backgroundColor: "#e83e5d",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff"
});

export const Login: React.FC<RouteComponentProps> = props => {
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("demo");
  const [errorMessage, setErrorMessage] = useState("");
  const userContext = useContext(UserContext);

  const handleEmail = (ev: any) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev: any) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    const loginResponse: ILoginResponse = await loginService.login(email, password);
    if (loginResponse.errors) {
    } else if (loginResponse.jwt && loginResponse.user) {
      localStorage.setItem("user_jwt", loginResponse.jwt);
      userContext.setUserData(loginResponse.user);
      props.history.push("/current-events");
    }
  };

  return (
    <DivContainer>
      <WrapperDiv>
        <ImgLogo src={require("src/images/poc-chef-logo.png")} />
        <ImgIcon height="40px" src={require("src/images/group.svg")} />
        <InputField name="email" value={email} onChange={handleEmail} />
        <InputField name="password" value={password} onChange={handlePassword} />
        <ButtonSubmit type="button" onClick={handleSubmit}>
          Submit
        </ButtonSubmit>
        <label>{errorMessage}</label>
        <ImgIcon height="72px" src={require("src/images/group-2.svg")} />
      </WrapperDiv>
    </DivContainer>
  );
};
