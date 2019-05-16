import { IEvent } from "src/partner/models/Event";
import { IFluxStandardAction } from "src/common/ducks";

const FETCH_PAST_EVENT_START = "partner/views/pastEvent/FETCH_PAST_EVENT_START";
const FETCH_PAST_EVENT_SUCCESS = "partner/views/pastEvent/FETCH_CURRENT_EVENT_SUCCESS";
const FETCH_PAST_EVENT_FAIL = "partner/views/currentEvent/FETCH_PAST_EVENT_FAIL";

export interface IState {
  events: IEvent[];
  isLoading: boolean;
  error: Error;
}

export const initialState: IState = {
  events: [],
  isLoading: false,
  error: new Error(),
};

export default function reducer(state: IState, action: IFluxStandardAction) {
  switch (action.type) {
    case FETCH_PAST_EVENT_START:
      return { ...state, isLoading: true, events: [] };
    case FETCH_PAST_EVENT_SUCCESS:
      return { ...state, isLoading: false, events: action.payload };
    case FETCH_PAST_EVENT_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export function startFetching() {
  return { type: FETCH_PAST_EVENT_START };
}
export function fetchingSucess(events: IEvent[]) {
  return { type: FETCH_PAST_EVENT_SUCCESS, payload: events };
}
export function fetchingError(error: Error) {
  return { type: FETCH_PAST_EVENT_FAIL, payload: error };
}
