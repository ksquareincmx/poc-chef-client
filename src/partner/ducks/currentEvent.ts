import { IEvent } from "src/partner/models/Event";
import { IFluxStandardAction } from "src/common/ducks";

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

const FETCH_CURRENT_EVENT_START = "partner/views/currentEvent/FETCH_CURRENT_EVENT_START";
const FETCH_CURRENT_EVENT_SUCCESS = "partner/views/currentEvent/FETCH_CURRENT_EVENT_SUCCESS";
const FETCH_CURRENT_EVENT_FAIL = "partner/views/currentEvent/FETCH_CURRENT_EVENT_FAIL";

export const reducer = (state: IState, action: IFluxStandardAction): IState => {
  switch (action.type) {
    case FETCH_CURRENT_EVENT_START:
      return { ...state, isLoading: true };
    case FETCH_CURRENT_EVENT_SUCCESS:
      return { ...state, events: action.payload, isLoading: false };
    case FETCH_CURRENT_EVENT_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export function startFetching() {
  return { type: FETCH_CURRENT_EVENT_START };
}

export function fetchingSucess(events: IEvent[]) {
  return { type: FETCH_CURRENT_EVENT_SUCCESS, payload: events };
}

export function fetchingError(error: Error) {
  return { type: FETCH_CURRENT_EVENT_FAIL, payload: error };
}
