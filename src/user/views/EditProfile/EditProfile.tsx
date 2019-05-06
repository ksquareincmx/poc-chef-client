import React, { Fragment, MouseEvent } from "react";
import { FloatContentWrapper } from "src/common/ui/ContentWrapper";
import { Header } from "src/partner/modules/Header";
import { EditProfileCard } from "src/user/modules/EditProfileCard";
import { GradientButton } from "src/common/ui/Buttons";

// Must do a EditProfileContainer that pass the change function

export const EditProfileView: React.FC = () => {
  const handleSaveProfileChanges = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <Fragment>
      <Header title="My Profile" userStyle />
      <FloatContentWrapper>
        <EditProfileCard />
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <GradientButton
            style={{ width: "8.4375rem", color: "#fff", fontWeight: "bold" }}
            onClick={handleSaveProfileChanges}
          >
            SAVE CHANGES
          </GradientButton>
        </div>
      </FloatContentWrapper>
    </Fragment>
  );
};
