import React, { useContext, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { eventService } from "src/partner/services";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";

import {
  reducer,
  initialState,
  startFetching,
  fetchingSucess,
  fetchingError,
} from "../../ducks/currentEvent";
import { CurrentEventsContainer } from "./CurrentEventsContainer";

export const CurrentEvents: React.FC<{}> = () => {
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchEvents = async () => {
    dispatch(startFetching());
    try {
      const events = await eventService.getCurrentEvents();
      events.sort(dateComparator);
      dispatch(fetchingSucess(events));
    } catch (err) {
      fetchingError(err);
      notificationContext.handleShowNotification(state.error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <Header title="Events" />
      {!state.isLoading && <CurrentEventsContainer events={state.events} />}
    </React.Fragment>
  );
};
