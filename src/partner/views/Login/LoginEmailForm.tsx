import React, { useState, useContext } from "react";
import { loginService } from "src/common/services";
import { RouteComponentProps } from "react-router";
import { currentEventsRoute } from "src/partner/routes";
import { InputField, ButtonSubmit, LoginForm, LoginContainer } from "src/partner/modules/ui/Login";
import { LinkStyled } from "src/common/ui/Link";
import { NotificationContext } from "src/providers";

export const LoginEmailForm: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("maik@fakegmail.com"); //unique temporal user
  const [password, setPassword] = useState("plainpassword");
  const notification = useContext(NotificationContext.NotificationContext);

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

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();

    try {
      if (!verifyFields()) {
        throw new Error("Fields should not be empty");
      }

      const loginResponse = await loginService.login(email, password);
      if (loginResponse.jwt && loginResponse.user && loginResponse.user.role === "partner") {
        loginService.setUser(loginResponse.user);
        loginService.setJWT(loginResponse.jwt);
        history.push(currentEventsRoute);
      } else {
        throw new Error("Error at loggin, please try again");
      }
    } catch (err) {
      notification.handleShowNotification(err.message);
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <InputField type="email" name="email" value={email} onChange={handleEmail} />
        <InputField type="password" name="password" value={password} onChange={handlePassword} />
      </LoginForm>
      <ButtonSubmit onClick={handleSubmit}>Login</ButtonSubmit>
      <LinkStyled to="#">Register</LinkStyled>
    </LoginContainer>
  );
};
