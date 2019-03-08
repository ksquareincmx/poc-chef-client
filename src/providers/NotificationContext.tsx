import React from "react";
import { Notification } from "../partner/modules/ui/Modal/Notification";

export const NotificationContext = React.createContext({
  notifcationText: "",
  showNotification: false,
  handleShowNotification: (text: string) => {},
  handleCloseNotification: () => {},
});

export interface INotificationProviderState {
  notifcationText: string;
  showNotification: boolean;
}

export const NotificationProvider: React.FC<{}> = props => {
  const [notificationText, setNotificationText] = React.useState("");
  const [showNotification, setShowNotification] = React.useState(false);

  const handleShowNotification = (text: string) => {
    setNotificationText(text);
    setShowNotification(true);
    setTimeout(handleCloseNotification, 2500);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    resetNotificationText();
  };

  const resetNotificationText = () => {
    setNotificationText("");
  };

  return (
    <NotificationContext.Provider
      value={{
        notifcationText: notificationText,
        showNotification: showNotification,
        handleShowNotification: handleShowNotification,
        handleCloseNotification: handleCloseNotification,
      }}
    >
      {props.children}
      {showNotification && <Notification text={notificationText} close={handleCloseNotification} />}
    </NotificationContext.Provider>
  );
};
