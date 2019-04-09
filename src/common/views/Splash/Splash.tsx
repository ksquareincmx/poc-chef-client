import React, { useEffect } from "react";
import { MainDivContainer, ImgLogo } from "../../ui/MainDivContainer";
import { RouteComponentProps } from "react-router";
import { userRoute, partnerRoute } from "src/common/routes";
import { loginPartnerRoute } from "src/partner/routes";
import { loginUserRoute } from "src/user/routes";

export const Splash: React.FC<RouteComponentProps> = ({ history, location }) => {
  useEffect(() => {
    setTimeout(() => {
      const { pathname } = location;
      const nextLocation =
        pathname === partnerRoute
          ? loginPartnerRoute
          : pathname === userRoute
          ? loginUserRoute
          : loginPartnerRoute;

      history.push(nextLocation);
    }, 2000);
  }, []);

  return (
    <MainDivContainer>
      <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
    </MainDivContainer>
  );
};
