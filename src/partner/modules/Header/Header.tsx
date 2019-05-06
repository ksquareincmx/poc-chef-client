import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  Logo,
  HeaderTitleContainer,
  Title,
  HeaderUserImgContainer,
  UserImg,
} from "src/partner/modules/ui";

export interface IHeaderProps {
  title: string;
  userStyle?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ title, userStyle }) => {
  return (
    <HeaderContainer userStyle={userStyle}>
      <HeaderLogoContainer>
        <Logo src={require("src/images/poc-chef-logo.svg")} alt="Poc-Chef" />
      </HeaderLogoContainer>
      <HeaderTitleContainer>
        <Title>{title}</Title>
      </HeaderTitleContainer>
      <HeaderUserImgContainer>
        <NavLink to="/user/profile">
          <UserImg src={require("src/images/icons/user.svg")} alt="Poc-Chef" />
        </NavLink>
      </HeaderUserImgContainer>
    </HeaderContainer>
  );
};
