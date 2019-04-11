import React, { useContext } from "react";
import { loginService } from "src/common/services";
import { RouteComponentProps } from "react-router-dom";
import { NotificationContext } from "src/providers";
import { MainDivContainer, ImgLogo } from "src/common/ui/MainDivContainer";
import { currentEventsRoute, loginPartnerRoute } from "src/partner/routes";
import { loginUserRoute, myOrdersUserRoute } from "src/user/routes";
import { WrapperDiv, ImgIcon, ButtonGoogleLogin } from "src/common/ui/LoginForm";
import { LoginEmailForm } from "./LoginEmailForm";
import { GoogleLogin } from "react-google-login";

export const Login: React.FC<RouteComponentProps> = props => {
  const notificationContext = useContext(NotificationContext.NotificationContext);

  if (loginService.isUserLogged()) {
    const { pathname } = location;
    if (pathname === loginPartnerRoute) {
      //props.history.push(currentEventsRoute);
      //return null;
    }
    if (pathname === loginUserRoute) {
      //props.history.push(myOrdersUserRoute);
      //return null;
    }
  }
  const loginWithGoogle = (res: any) => {};
  return (
    <MainDivContainer>
      <WrapperDiv>
        <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
        <ImgIcon height="40px" src={require("src/images/group.svg")} />
        {/*<ButtonGoogleLogin onClick={loginWithGoogle}>
          <img src={require("src/images/google_plus_icon.svg")} />{" "}
          <span>&nbsp;Sign in with Google</span>
  </ButtonGoogleLogin>*/}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          onSuccess={res => loginWithGoogle(res)}
          onFailure={e => console.error(e)}
        />
        <ImgIcon height="72px" src={require("src/images/group-2.svg")} />
      </WrapperDiv>
    </MainDivContainer>
  );
};
