import React from "react";
import { ImgLogo, AdminSite } from "src/common/ui/MainDivContainer";

export const LogoTitle: React.SFC = (props)=>{
    return (
    <div>
        <ImgLogo src={require("src/images/poc-chef-logo.svg")} />
        <AdminSite>ADMIN SITE</AdminSite>
    </div>);
}