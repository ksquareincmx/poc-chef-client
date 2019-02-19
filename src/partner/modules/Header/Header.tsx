import React from "react";
import { HeaderStyled } from "../ui";

interface IHeaderProps {
  title: string;
}

export const Header: React.SFC<IHeaderProps> = props => {
  return (
    <header>
      <HeaderStyled.HeaderContainer>
        <HeaderStyled.HeaderLogoContainer>
          <HeaderStyled.ImgLogo
            src={require("../../../images/poc-chef-logo.png")}
            alt="Poc-Chef"
          />
        </HeaderStyled.HeaderLogoContainer>
        <HeaderStyled.HeaderTitleContainer>
          <HeaderStyled.H1>{props.title}</HeaderStyled.H1>
        </HeaderStyled.HeaderTitleContainer>
        <HeaderStyled.HeaderUserIconContainer>
          <HeaderStyled.ImgUserPhoto
            src={require("../../../images/user-logo.png")}
            alt="Poc-Chef"
          />
        </HeaderStyled.HeaderUserIconContainer>
      </HeaderStyled.HeaderContainer>
    </header>
  );
};
