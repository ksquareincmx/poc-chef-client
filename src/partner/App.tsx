import React from "react";
import { Route } from "react-router-dom";
import CurrentEventsView from "./views/CurrentEventsView";

interface IPartnerAppProps {
  match: {
    url: string;
  };
}

const PartnerApp: React.SFC<IPartnerAppProps> = props => {
  return (
    <div>
      <Route path={`${props.match.url}/`} component={CurrentEventsView} />
    </div>
  );
};

export default PartnerApp;
