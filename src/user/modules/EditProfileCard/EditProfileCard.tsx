import React, { ChangeEvent, MouseEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardNavIconContainer,
  CardNavIcon,
  CardUserImgContainer,
  CardUserImg,
  CardForm,
  CardFormItem,
} from "src/user/modules/ui/EditProfileCard";

export const EditProfileCard: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <Card>
      <CardNavIconContainer>
        <NavLink to={"/user/profile/"}>
          <CardNavIcon src={require("src/images/icons/close.svg")} alt="Close-icon" />
        </NavLink>
      </CardNavIconContainer>
      <CardUserImgContainer>
        <CardUserImg src={require("src/images/profile.png")} alt="User-img" />
      </CardUserImgContainer>
      <CardForm>
        <CardFormItem
          label="Name"
          inputProps={{ value: "David Guillermo Alcocer", onChange: handleNameChange }}
        />
        <CardFormItem
          label="E-mail"
          inputProps={{ value: "david.guillermo@ksquareinc.com", onChange: handleEmailChange }}
        />
        <CardFormItem
          label="Phone"
          inputProps={{ value: "01 55 9991234567", onChange: handlePhoneChange }}
        />
      </CardForm>
    </Card>
  );
};
