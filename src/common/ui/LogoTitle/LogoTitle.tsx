import React from "react";
import { ImgLogo, AdminSite } from "src/common/ui/MainDivContainer";

export interface LogoTitleProps {
  title: boolean;
  titleText?: string;
}
export const LogoTitle: React.SFC<LogoTitleProps> = ({ title, titleText }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
      {title && <AdminSite>{titleText}</AdminSite>}
    </div>
  );
};
