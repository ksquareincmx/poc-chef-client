import React, { useEffect } from "react";
import { MainDivContainer, ImgLogo } from "../../ui/MainDivContainer";
import { RouteComponentProps } from "react-router";
import { loginPartnerRoute } from "src/partner/routes";
import { loginUserRoute } from "src/user/routes";

export const Splash: React.FC<RouteComponentProps> = ({ history, location }) => {
  useEffect(() => {
    setTimeout(() => {
      const { pathname } = location;
      const isPartnerRoute = /^\/partner/gi.test(pathname);
      const isUserRoute = /^\/user/gi.test(pathname);
      const nextLocation = isPartnerRoute
        ? loginPartnerRoute
        : isUserRoute
        ? loginUserRoute
        : loginUserRoute;

      history.push(nextLocation);
    }, 2000);
  }, []);

  return (
    <MainDivContainer>
      <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
    </MainDivContainer>
  );
};
