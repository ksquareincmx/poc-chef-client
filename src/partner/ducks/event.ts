import { IEvent, event } from "src/partner/models/Event";
import { IFluxStandardAction } from "src/common/ducks/index";

export interface IStateEvent {
  isLoading: boolean;
  localEvent: IEvent;
  error?: Error;
}

export const initialState: IStateEvent = {
  isLoading: false,
  localEvent: event(),
  error: new Error(),
};

export const MODULE = "partner/eventView/";
export const FETCH_EVENT_START = `${MODULE}/FETCH_EVENT_START`;
export const FETCH_EVENT_SUCCESS = `${MODULE}/FETCH_EVENT_SUCCESS`;
export const FETCH_EVENT_FAIL = `${MODULE}/FETCH_EVENT_FAIL`;

export default function reducer(state: IStateEvent, action: IFluxStandardAction): IStateEvent {
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
