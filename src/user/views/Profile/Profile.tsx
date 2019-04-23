import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  TextLabel,
  NormalIcon,
  NavIcon,
  ProfileCardContainer,
  ProfileCard,
  NavIconContainer,
  UserProfileImgContainer,
  UserProfileImg,
  UserInfoContainer,
  UserInfoItem,
} from "src/user/modules/ui/Profile";
import { Header } from "src/partner/modules/Header";

export const Profile: React.FC = () => {
  const [name, setName] = React.useState("");

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <Fragment>
      <Header title="My Profile" userStyle />
      <ProfileCardContainer>
        <ProfileCard>
          <NavIconContainer>
            {/* This is going to change */}
            <NavLink to={"/user/my-orders"}>
              <NavIcon src={require("../../../images/edit.png")} alt="Edit-icon" />
            </NavLink>
          </NavIconContainer>
          <UserProfileImgContainer>
            <UserProfileImg src={require("../../../images/user-logo.png")} alt="User-img" />
          </UserProfileImgContainer>
          <UserInfoContainer>
            <UserInfoItem>
              <NormalIcon src={require("../../../images/person.png")} alt="User-icon" />
              <TextLabel bold>David Guillermo Alcocer</TextLabel>
            </UserInfoItem>
            <UserInfoItem>
              <NormalIcon src={require("../../../images/mail.png")} alt="Email-icon" />
              <TextLabel>david.guillermo@ksquareinc.com</TextLabel>
            </UserInfoItem>
            <UserInfoItem>
              <NormalIcon src={require("../../../images/phone.png")} alt="Phone-icon" />
              <TextLabel>555 185 2597</TextLabel>
            </UserInfoItem>
          </UserInfoContainer>
        </ProfileCard>
      </ProfileCardContainer>
    </Fragment>
  );
};
