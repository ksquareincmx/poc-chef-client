import React, { useState } from "react";
import { loginService } from "src/common/services";
import { RouteComponentProps } from "react-router";
import { currentEventsRoute } from "src/partner/routes";
import { ILoginErrorField } from "src/common/models/Login";
import { InputField, ButtonSubmit, LoginForm } from "src/common/ui/LoginForm";

interface ILoginWithEmailProps extends RouteComponentProps {
  handleShowNotification: (text: string) => void;
}

export const LoginEmailForm: React.FC<ILoginWithEmailProps> = ({
  history,
  handleShowNotification,
}) => {
  const [email, setEmail] = useState("maik@fakegmail.com");
  const [password, setPassword] = useState("plainpassword");
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
    if (!verifyFields()) {
      handleShowNotification("Fields should not be empty");
      return;
    }

    const handleShowErrorMessages = (errors: ILoginErrorField[]) => {
      const messages = errors.map((error: ILoginErrorField) => error.error).join("");
      if (messages !== "") {
        handleShowNotification(messages);
      }
    };

    const loginResponse = await loginService.login(email, password);
    if (loginResponse.errors) {
      handleShowErrorMessages(loginResponse.errors);
    } else if (loginResponse.jwt && loginResponse.user) {
      loginService.setUser(loginResponse.user);
      loginService.setJWT(loginResponse.jwt);
      history.push(currentEventsRoute);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <InputField type="email" name="email" value={email} onChange={handleEmail} />
      <InputField type="password" name="password" value={password} onChange={handlePassword} />
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </LoginForm>
  );
};
