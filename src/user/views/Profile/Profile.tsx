import React, { Fragment } from "react";
import { ProfileCard } from "src/user/modules/ProfileCard";
import { FloatContentWrapper } from "src/common/ui/ContentWrapper";
import { Header } from "src/partner/modules/Header";

export const ProfileView: React.FC = () => {
  const [name, setName] = React.useState("");

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <Fragment>
      <Header title="My Profile" userStyle />
      <FloatContentWrapper>
        <ProfileCard />
      </FloatContentWrapper>
    </Fragment>
  );
};
