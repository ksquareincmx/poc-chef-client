import { EventService } from "src/partner/services";
import { IEvent, event } from "src/partner/models/Event";
import { FETCHING } from "src/user/reducers/orderListReducer";

export const MODULE = "partner/eventView/";
export const START_FETCH = `${MODULE}/START_FETCH`;
export const FETCH_FINISHED_SUCCESS = `${MODULE}/FETCH_FINISHED_SUCCESS`;
export const FETCH_FINISHED_FAILURE = `${MODULE}/FETCH_FINISHED_FAILURE`;

export interface IState {
  isLoading: boolean;
  error: boolean;
  localEvent: IEvent;
}

export const initialState = {
  isLoading: false,
  error: false,
  localEvent: event()
};

interface IAction {
  type: string;
  payload?: any;
  meta?: any;
  error?: boolean;
}

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case START_FETCH:
      return { ...state, isLoading: true };
    case FETCH_FINISHED_SUCCESS:
      return { ...state, isLoading: false, error: false, localEvent: action.payload };
    case FETCH_FINISHED_FAILURE:
      return { isLoading: false, error: true, localEvent: event() };
    default:
      return state;
  }
}

type dispatchType = (action: IAction) => void;

export async function fetchEvent(eventId: number | string, dispatch: dispatchType) {
  startFetching(dispatch);
  try {
    const events = await EventService.eventService.getCurrentEvents();
    const localEvent = events.filter(e => e.id == eventId)[0] || event();
    dispatch({ type: FETCH_FINISHED_SUCCESS, payload: localEvent });
  } catch (err) {
    dispatch({ type: FETCH_FINISHED_FAILURE, payload: "error", error: true });
  }
}

export function startFetching(dispatch: dispatchType) {
  dispatch({ type: FETCHING });
}
