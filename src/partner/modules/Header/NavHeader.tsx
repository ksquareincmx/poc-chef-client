import React from "react";
import { HeaderStyled, CardIconImg } from "src/partner/modules/ui";
import styles from "styled-components";
import { TextTitleHeader } from "../ui/Text";
import { LinkStyled } from "src/common/ui/Link";

export interface IHeaderProps {
  title: string;
  to: string;
}

const PartnerHeader = styles(HeaderStyled.HeaderContainer)`
  background: #999;
  height: 6.5rem;
`;

export const NavHeader: React.SFC<IHeaderProps> = props => {
  return (
    <PartnerHeader>
      <HeaderStyled.HeaderLogoContainer>
        <LinkStyled to={props.to}>
          <CardIconImg src={require("src/images/icons/baseline-keyboard_arrow_left-24px.svg")} />{" "}
          BACK
        </LinkStyled>
      </HeaderStyled.HeaderLogoContainer>
      <HeaderStyled.HeaderTitleContainer>
        <TextTitleHeader>{props.title}</TextTitleHeader>
      </HeaderStyled.HeaderTitleContainer>
      <HeaderStyled.HeaderUserIconContainer>
        <img src={require("src/images/poc-chef-logo.png")} alt="Poc-Chef" />
      </HeaderStyled.HeaderUserIconContainer>
    </PartnerHeader>
  );
};
