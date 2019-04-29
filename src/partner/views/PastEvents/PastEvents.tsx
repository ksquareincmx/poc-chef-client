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
import { PastEventsContainer } from "./PastEventsContainer";

export const PastEvents: React.FC<{}> = () => {
  //const notificationContext = useContext(NotificationContext.NotificationContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchEvents = async () => {
    dispatch(startFetching());
    try {
      const events = await eventService.getPastEvents();
      events.sort(dateComparator);
      dispatch(fetchingSucess(events));
    } catch (err) {
      dispatch(fetchingError(err));
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <Header title="Events" />
      {(state.isLoading || state.error) && <p>is loading</p>}
      {!state.isLoading && <PastEventsContainer events={state.events} />}
    </React.Fragment>
  );
};
