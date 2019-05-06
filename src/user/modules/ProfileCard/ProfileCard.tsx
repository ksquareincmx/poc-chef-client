import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  CardTextLabel,
  CardNormalIcon,
  CardNavIcon,
  Card,
  CardNavIconContainer,
  CardUserImgContainer,
  CardUserImg,
  CardDetails,
  CardItem,
} from "src/user/modules/ui/ProfileCard";

export const ProfileCard: React.FC = () => {
  // useEffect(() => {}, []);
  return (
    <Card>
      <CardNavIconContainer>
        <NavLink to={"/user/profile/edit"}>
          <CardNavIcon src={require("src/images/icons/baseline-edit-24px.svg")} alt="Edit-icon" />
        </NavLink>
      </CardNavIconContainer>
      <CardUserImgContainer>
        <CardUserImg src={require("src/images/profile.png")} alt="User-img" />
      </CardUserImgContainer>
      <CardDetails>
        <CardItem>
          <CardNormalIcon src={require("src/images/icons/user.svg")} alt="User-icon" />
          <CardTextLabel bold>David Guillermo Alcocer</CardTextLabel>
        </CardItem>
        <CardItem>
          <CardNormalIcon src={require("src/images/icons/mail.svg")} alt="Email-icon" />
          <CardTextLabel>david.guillermo@ksquareinc.com</CardTextLabel>
        </CardItem>
        <CardItem>
          <CardNormalIcon src={require("src/images/icons/phone.svg")} alt="Phone-icon" />
          <CardTextLabel>555 185 2597</CardTextLabel>
        </CardItem>
      </CardDetails>
    </Card>
  );
};
