import React from "react";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderTitleContainer,
  HeaderUserImgContainer,
  CardIconImg,
} from "src/partner/modules/ui";
import styles from "styled-components";
import { TextTitleHeader } from "../ui/Text";
import { LinkStyled } from "src/common/ui/Link";

export interface IHeaderProps {
  title: string;
  to: string;
}

export const NavHeader: React.FC<IHeaderProps> = props => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <LinkStyled to={props.to}>
          <CardIconImg src={require("src/images/icons/baseline-keyboard_arrow_left-24px.svg")} />{" "}
          BACK
        </LinkStyled>
      </HeaderLogoContainer>
      <HeaderTitleContainer>
        <TextTitleHeader>{props.title}</TextTitleHeader>
      </HeaderTitleContainer>
      <HeaderUserImgContainer>
        <img src={require("src/images/poc-chef-logo.png")} alt="Poc-Chef" />
      </HeaderUserImgContainer>
    </HeaderContainer>
  );
};
