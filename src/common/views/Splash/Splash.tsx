import React, { useEffect } from "react";
import { MainDivContainer, ImgLogo } from "../../ui/MainDivContainer";
import { RouteComponentProps } from "react-router";
import { loginPartnerRoute } from "src/partner/routes";
import { loginUserRoute } from "src/user/routes";
import { LogoTitle } from "src/common/ui/LogoTitle";

export const Splash: React.FC<RouteComponentProps> = ({ history, location }) => {
  const { pathname } = location;
  const isPartnerRoute = /^\/partner/gi.test(pathname);
  const isUserRoute = /^\/user/gi.test(pathname);

  useEffect(() => {
    setTimeout(() => {
      const nextLocation = isPartnerRoute
        ? loginPartnerRoute
        : isUserRoute
        ? loginUserRoute
        : loginUserRoute;

      history.push(nextLocation);
    }, 2000);
  }, []);

  const MainDivContainerProps = isPartnerRoute ? { partner: true } : { user: true };
  const LogoTitleProps = isPartnerRoute
    ? { title: true, titleText: "ADMIN SITE" }
    : { title: false };

  return (
    <MainDivContainer {...MainDivContainerProps}>
      <LogoTitle {...LogoTitleProps} />
    </MainDivContainer>
  );
};
