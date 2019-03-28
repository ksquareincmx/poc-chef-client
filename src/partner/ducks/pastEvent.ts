import { IEvent } from "src/partner/models/Event";

const FETCH_PAST_EVENT_START = "partner/views/pastEvent/FETCH_PAST_EVENT_START";
const FETCH_PAST_EVENT_SUCCESS = "partner/views/pastEvent/FETCH_CURRENT_EVENT_SUCCESS";
const FETCH_PAST_EVENT_FAIL = "partner/views/currentEvent/FETCH_PAST_EVENT_FAIL";
const UPDATE_EVENT = "partner/views/pastEvent/UPDATE_EVENT";

export interface IState {
  events: IEvent[];
  isLoading: boolean;
  error: any;
}

export interface IAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export const initialState: IState = {
  events: [],
  isLoading: false,
  error: undefined,
};

export function startFetching() {
  return { type: FETCH_PAST_EVENT_START };
}
export function fetchingSucess(events: IEvent[]) {
  return { type: FETCH_PAST_EVENT_SUCCESS, payload: events };
}
export function fetchingError(error: any) {
  return { type: FETCH_PAST_EVENT_FAIL, payload: error };
}
export function editEvent(event: IEvent) {
  return { type: UPDATE_EVENT, payload: event };
}
function updateEvent(state: IState, action: IAction) {
  const newEvents = state.events.map((ev: IEvent) => {
    if (ev["id"] === action.payload["id"]) {
      return event;
    }
    return ev;
  });

  return { ...state, events: newEvents };
}

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case FETCH_PAST_EVENT_START:
      return { ...state, isLoading: false, events: [] };
    case FETCH_PAST_EVENT_SUCCESS:
      return { ...state, isLoading: false, events: action.payload };
    case FETCH_PAST_EVENT_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case UPDATE_EVENT:
      return updateEvent(state, action);

    default:
      return state;
  }
}
