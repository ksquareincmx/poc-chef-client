import React, { useContext } from "react";
import { loginService } from "src/common/services";
import { RouteComponentProps } from "react-router-dom";
import { NotificationContext } from "src/providers";
import { MainDivContainer, ImgLogo } from "src/common/ui/MainDivContainer";
import { USER_MY_ORDERS_ROUTE } from "src/user/routes";
import { WrapperDiv, ImgIcon } from "src/partner/modules/ui/Login";
import { GoogleLogin } from "react-google-login";
import { ButtonGoogleLogin } from "src/partner/modules/ui/Login";
import { LogoTitle } from "src/common/ui/LogoTitle";

export const Login: React.FC<RouteComponentProps> = props => {
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const loginWithGoogle = async (res: any) => {
    const userAuth = await loginService.loginWithGoogle(res.tokenId);
    if (userAuth.errors) {
      notificationContext.handleShowNotification("Error at login with google, please try again");
    } else if (userAuth.jwt && userAuth.user) {
      loginService.setUser(userAuth.user);
      loginService.setJWT(userAuth.jwt);
      props.history.push(USER_MY_ORDERS_ROUTE);
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
    props.history.push(USER_MY_ORDERS_ROUTE);
  }

  return (
    <MainDivContainer user={true}>
      <WrapperDiv>
        <LogoTitle title={false} />
        <ImgIcon height="40px" src={require("src/images/group.svg")} />
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          onSuccess={loginWithGoogle}
          onFailure={console.error}
          render={customButton}
        />
        <ImgIcon height="72px" src={require("src/images/group-2.svg")} />
      </WrapperDiv>
    </MainDivContainer>
  );
};
