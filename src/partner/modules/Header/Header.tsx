import React from "react";
import {
  HeaderContainer,
  HeaderLogoContainer,
  ImgLogo,
  HeaderTitleContainer,
  H1,
  HeaderUserIconContainer,
  ImgUserPhoto
} from "../ui/Header/Header";

interface IHeaderProps {
  title: string;
}

const Header: React.SFC<IHeaderProps> = props => {
  return (
    <header>
      <HeaderContainer>
        <HeaderLogoContainer>
          <ImgLogo
            src={require("../../../images/poc-chef-logo.png")}
            alt="Poc-Chef"
          />
        </HeaderLogoContainer>
        <HeaderTitleContainer>
          <H1>{props.title}</H1>
        </HeaderTitleContainer>
        <HeaderUserIconContainer>
          <ImgUserPhoto
            src={require("../../../images/user-logo.png")}
            alt="Poc-Chef"
          />
        </HeaderUserIconContainer>
      </HeaderContainer>
    </header>
  );
};

export default Header;
