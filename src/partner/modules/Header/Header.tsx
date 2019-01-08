import React from "react";
import { Redirect } from "react-router";

interface IHeaderProps {
  title: string;
}

const Header: React.SFC<IHeaderProps> = props => {
  return (
    <header>
      <div
        className="header-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "5px 3px 25px 3px",
          background: "linear-gradient(to right, #F8823D, #E83E5D)",
          width: "100vw",
          height: "6em"
        }}
      >
        <div
          className="header-logo-container"
          style={{
            boxSizing: "border-box",
            height: "100%",
            width: "33.33%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <img
            src={require("../../../images/poc-chef-logo.png")}
            alt="Poc-Chef"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </div>

        <div
          className="header-title-container"
          style={{
            boxSizing: "border-box",
            padding: "5px",
            height: "100%",
            width: "33.33%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto",
              color: "white",
              fontSize: "16px"
            }}
          >
            Current Events
          </h1>
        </div>
        <div
          className="header-user-icon-container"
          style={{
            boxSizing: "border-box",
            padding: "5px",
            height: "100%",
            width: "33.33%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <img
            src={require("../../../images/user-logo.png")}
            alt="Poc-Chef"
            style={{
              width: "2.5em",
              height: "2.5em",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
