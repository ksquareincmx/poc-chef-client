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
              <NavIcon src={require("src/images/icons/baseline-edit-24px.svg")} alt="Edit-icon" />
            </NavLink>
          </NavIconContainer>
          <UserProfileImgContainer>
            <UserProfileImg src={require("src/images/user-logo.svg")} alt="User-img" />
          </UserProfileImgContainer>
          <UserInfoContainer>
            <UserInfoItem>
              <NormalIcon src={require("src/images/icons/user.svg")} alt="User-icon" />
              <TextLabel bold>David Guillermo Alcocer</TextLabel>
            </UserInfoItem>
            <UserInfoItem>
              <NormalIcon src={require("src/images/icons/mail.svg")} alt="Email-icon" />
              <TextLabel>david.guillermo@ksquareinc.com</TextLabel>
            </UserInfoItem>
            <UserInfoItem>
              <NormalIcon src={require("src/images/icons/phone.svg")} alt="Phone-icon" />
              <TextLabel>555 185 2597</TextLabel>
            </UserInfoItem>
          </UserInfoContainer>
        </ProfileCard>
      </ProfileCardContainer>
    </Fragment>
  );
};
