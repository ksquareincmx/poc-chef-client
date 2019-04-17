import React from "react";
import { HeaderStyled } from "src/partner/modules/ui";
import styles from "styled-components";
import { TextTitleHeader } from "../ui/Text";

export interface IHeaderProps {
  title: string;
}

const PartnerHeader = styles(HeaderStyled.HeaderContainer)`
  background: #999;
  height: 6.5rem;
`;

export const Header: React.SFC<IHeaderProps> = props => {
  return (
    <PartnerHeader>
      <HeaderStyled.HeaderLogoContainer>
        <img src={require("src/images/poc-chef-logo.png")} alt="Poc-Chef" />
      </HeaderStyled.HeaderLogoContainer>
      <HeaderStyled.HeaderTitleContainer>
        <TextTitleHeader>{props.title}</TextTitleHeader>
      </HeaderStyled.HeaderTitleContainer>
      <HeaderStyled.HeaderUserIconContainer>
        <HeaderStyled.ImgUserPhoto src={require("src/images/user-logo.png")} alt="Poc-Chef" />
      </HeaderStyled.HeaderUserIconContainer>
    </PartnerHeader>
  );
};
