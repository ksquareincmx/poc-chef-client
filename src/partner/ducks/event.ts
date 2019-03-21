import { EventService } from "src/partner/services";
import { IEvent, event } from "src/partner/models/Event";

export const MODULE = "partner/eventView/";
export const FETCH_EVENT_START = `${MODULE}/FETCH_EVENT_START`;
export const FETCH_EVENT_SUCCESS = `${MODULE}/FETCH_EVENT_SUCCESS`;
export const FETCH_EVENT_FAIL = `${MODULE}/FETCH_EVENT_FAIL`;

export interface IState {
  isLoading: boolean;
  localEvent: IEvent;
  error?: Error;
}

export const initialState: IState = {
  isLoading: false,
  localEvent: event()
};

interface IAction {
  type: string;
  payload?: any;
  meta?: any;
  error?: boolean;
}

type dispatchType = (action: IAction) => void;

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case FETCH_EVENT_START:
      return { ...state, isLoading: true };
    case FETCH_EVENT_SUCCESS:
      return { isLoading: false, localEvent: action.payload };
    case FETCH_EVENT_FAIL:
      return { isLoading: false, error: action.payload, localEvent: event() };
    default:
      return state;
  }
}

export const fetchEventStarted = () => {
  return { type: FETCH_EVENT_START };
};

export const fetchEventSucceed = (event: IEvent) => {
  return { type: FETCH_EVENT_SUCCESS, payload: event };
};

export const fetchEventFailed = (error: Error) => {
  return { type: FETCH_EVENT_FAIL, payload: error };
};

export const fetchEvent = async (eventId: number | string, dispatch: dispatchType) => {
  dispatch(fetchEventStarted());
  try {
    const events = await EventService.eventService.getCurrentEvents();
    const localEvent = events.filter(e => e.id == eventId)[0] || event();
    dispatch(fetchEventSucceed(localEvent));
  } catch (err) {
    dispatch(fetchEventFailed(new Error("error at fetching event")));
  }
};
