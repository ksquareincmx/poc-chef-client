import React, { useContext } from "react";
import { loginService } from "src/common/services";
import { RouteComponentProps } from "react-router-dom";
import { NotificationContext } from "src/providers";
import { MainDivContainer, ImgLogo } from "src/common/ui/MainDivContainer";
import { currentEventsRoute, loginPartnerRoute } from "src/partner/routes";
import { loginUserRoute, myOrdersUserRoute } from "src/user/routes";
import { WrapperDiv, ImgIcon } from "src/partner/modules/ui/Login";
import { GoogleLogin } from "react-google-login";
import { ButtonGoogleLogin } from "src/partner/modules/ui/Login";
import { LoginEmailForm } from "../../../partner/views/Login/LoginEmailForm";

export const Login: React.FC<RouteComponentProps> = props => {
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const { pathname } = props.location;
  const { history } = props;
  const isLoginPartnerRoute = /\/partner\/login\/?/gi.test(pathname);
  const isLoginUserRoute = /\/user\/login\/?/gi.test(pathname);

  const loginWithGoogle = async (res: any) => {
    const userAuth = await loginService.loginWithGoogle(res.tokenId);
    if (userAuth.errors) {
      notificationContext.handleShowNotification("Error at login with google, please try again");
    } else if (userAuth.jwt && userAuth.user) {
      loginService.setUser(userAuth.user);
      loginService.setJWT(userAuth.jwt);
      props.history.push(myOrdersUserRoute);
    }
  };

  const customButton = (renderProps: any) => {
    if (renderProps) {
      return (
        <ButtonGoogleLogin {...renderProps}>
          <img src={require("src/images/google_plus_icon.svg")} />
          <span>&nbsp;Sign in with Google</span>
        </ButtonGoogleLogin>
      );
    }
    return <button {...renderProps}>Login</button>;
  };

  if (loginService.isUserLogged()) {
    if (isLoginPartnerRoute) {
      props.history.push(currentEventsRoute);
      return null;
    }
    if (isLoginUserRoute) {
      props.history.push(myOrdersUserRoute);
      return null;
    }
  }

  return (
    <MainDivContainer>
      <WrapperDiv>
        <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
        <ImgIcon height="40px" src={require("src/images/group.svg")} />
        {isLoginPartnerRoute && (
          <LoginEmailForm
            {...props}
            handleShowNotification={notificationContext.handleShowNotification}
          />
        )}
        {isLoginUserRoute && (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            onSuccess={loginWithGoogle}
            onFailure={console.error}
            render={customButton}
          />
        )}
        <ImgIcon height="72px" src={require("src/images/group-2.svg")} />
      </WrapperDiv>
    </MainDivContainer>
  );
};
