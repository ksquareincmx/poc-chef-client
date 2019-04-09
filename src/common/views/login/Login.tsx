import React, { useState, useContext } from "react";
import { loginService } from "src/common/services";
import styledComponentsTS from "styled-components-ts";
import styledComponents from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { NotificationContext } from "src/providers";
import { ILoginErrorField } from "src/common/models/Login";
import { MainDivContainer, ImgLogo } from "src/common/ui/MainDivContainer";
import { currentEventsRoute, loginPartnerRoute } from "src/partner/routes";
import { loginUserRoute, myOrdersUserRoute } from "src/user/routes";

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

export const Login: React.FC<RouteComponentProps> = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const handleEmail = (ev: any) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev: any) => {
    setPassword(ev.target.value);
  };

  const verifyFields = () => {
    if (email === "") {
      return false;
    }
    if (password === "") {
      return false;
    }
    return true;
  };

  const handleShowErrorMessages = (errors: ILoginErrorField[]) => {
    const messages = errors.map((error: ILoginErrorField) => error.error).join();
    notificationContext.handleShowNotification(messages);
  };

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    if (!verifyFields()) {
      notificationContext.handleShowNotification("Fields should not be empty");
      return;
    }

    const loginResponse = await loginService.login(email, password);
    if (loginResponse.errors) {
      handleShowErrorMessages(loginResponse.errors);
    } else if (loginResponse.jwt && loginResponse.user) {
      loginService.setUser(loginResponse.user);
      loginService.setJWT(loginResponse.jwt);
      history.push(currentEventsRoute);
    }
  };

  if (loginService.isUserLogged()) {
    const { pathname } = location;
    if (pathname === loginPartnerRoute) {
      history.push(currentEventsRoute);
    }
    if (pathname === loginUserRoute) {
      history.push(myOrdersUserRoute);
    }
    return null;
  }

  return (
    <MainDivContainer>
      <WrapperDiv>
        <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
        <ImgIcon height="40px" src={require("src/images/group.svg")} />
        <InputField type="email" name="email" value={email} onChange={handleEmail} />
        <InputField type="password" name="password" value={password} onChange={handlePassword} />
        <ButtonSubmit type="button" onClick={handleSubmit}>
          Submit
        </ButtonSubmit>
        <ImgIcon height="72px" src={require("src/images/group-2.svg")} />
      </WrapperDiv>
    </MainDivContainer>
  );
};
