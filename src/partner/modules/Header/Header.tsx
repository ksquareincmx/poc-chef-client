import React from "react";

interface IHeaderProps {
  title: string;
}

const Header: React.SFC<IHeaderProps> = props => {
  return <header>{props.title}</header>;
};

export default Header;
