import React from "react";
import { Notification } from "../partner/modules/ui/Modal/Notification";

export const NotificationContext = React.createContext({
  notifcationText: "",
  showNotification: false,
  handleShowNotification: (text: string) => {},
  handleCloseNotification: () => {}
});

export interface INotificationProviderState {
  notifcationText: string;
  showNotification: boolean;
}

export class NotificationProvider extends React.Component<{}, INotificationProviderState> {
  state = {
    notifcationText: "",
    showNotification: false
  };

  handleShowNotification = (text: string) => {
    this.setState({ notifcationText: text, showNotification: true });
  };

  handleCloseNotification = () => {
    this.setState({ showNotification: false });
    this.resetNotificationText();
  };

  resetNotificationText = () => {
    this.setState({ notifcationText: "" });
  };

  render() {
    return (
      <NotificationContext.Provider
        value={{
          notifcationText: this.state.notifcationText,
          showNotification: this.state.showNotification,
          handleShowNotification: this.handleShowNotification,
          handleCloseNotification: this.handleCloseNotification
        }}
      >
        {this.props.children}
        {this.state.showNotification && (
          <Notification text={this.state.notifcationText} close={this.handleCloseNotification} />
        )}
      </NotificationContext.Provider>
    );
  }
}
