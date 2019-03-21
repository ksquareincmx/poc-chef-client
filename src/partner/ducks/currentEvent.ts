import { IEvent, event } from "src/partner/models/Event";

export interface IState {
  events: IEvent[];
  isLoading: boolean;
  error: any;
  currentEvent: IEvent;
  cancelEvent: boolean;
  openModal: boolean;
  editEvent: boolean;
}

export interface IActions {
  type: String;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export const initialState: IState = {
  events: [],
  isLoading: false,
  error: undefined,
  currentEvent: event(),
  cancelEvent: false,
  openModal: false,
  editEvent: false,
};

const CANCEL_EVENT = "partner/views/currentEvent/CANCEL_EVENT";
const CLOSE_MODAL = "partner/views/currentEvent/CLOSE_EVENT";
const CLOSE_MODAL_CANCEL_EVENT = "partner/views/currentEvent/CLOSE_MODAL_CANCEL_EVENT";
const CREATE_EVENT = "partner/views/currentEvent/CREATE_EVENT";
const UPDATE_EVENT = "partner/views/currentEvent/UPDATE_EVENT";
const SHOW_MODAL = "partner/views/currentEvent/SHOW_MODAL";
const SHOW_EDIT_MODAL = "partner/views/currentEvent/SHOW_EDIT_MODAL";
const SHOW_MODAL_CANCEL_EVENT = "partner/views/currentEvent/SHOW_MODAL_CANCEL_EVENT";
const START_FETCHING = "partner/views/currentEvent/START_FETCHING";
const FETCHING_SUCESS = "partner/views/currentEvent/FETCHING_SUCESS";
const FETCHING_ERROR = "partner/views/currentEvent/FETCHING_ERROR";

export const reducer = (state: IState, action: IActions): IState => {
  switch (action.type) {
    case CANCEL_EVENT:
      const eventsUpdated = state.events.filter((e: IEvent) => e.id != state.currentEvent.id);
      return { ...state, events: eventsUpdated, currentEvent: event(), cancelEvent: false };
    case CLOSE_MODAL:
      return { ...state, openModal: false, currentEvent: event() };
    case CLOSE_MODAL_CANCEL_EVENT:
      return { ...state, cancelEvent: false, currentEvent: event() };
    case CREATE_EVENT:
      const updatedEvents: IEvent[] = [...state.events];
      action.payload.orderNumber = "Event: #" + (updatedEvents.length + 1);
      updatedEvents.push(action.payload);
      return { ...state, openModal: false, events: updatedEvents };
    case UPDATE_EVENT:
      const currentEvents = state.events.map((ev: IEvent) => {
        if (ev.id === action.payload.id) {
          return action.payload;
        }
        return ev;
      });
      return { ...state, events: currentEvents, currentEvent: event(), editEvent: false };
    case SHOW_MODAL:
      return { ...state, openModal: true };

    case SHOW_EDIT_MODAL:
      return { ...state, currentEvent: action.payload, editEvent: true, openModal: true };
    case SHOW_MODAL_CANCEL_EVENT:
      return { ...state, cancelEvent: true, currentEvent: action.payload };
    case START_FETCHING:
      return { ...state, isLoading: true };
    case FETCHING_SUCESS:
      return { ...state, events: action.payload, isLoading: false };
    case FETCHING_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export function cancelEvent(events: IEvent[], currentEvent: IEvent) {
  return {
    type: CANCEL_EVENT,
  };
}

export function createEvent(event: IEvent) {
  return { type: CREATE_EVENT, payload: event };
}
export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function updateEvent(event: IEvent) {
  return { type: UPDATE_EVENT, payload: event };
}

export function showModal() {
  return { type: SHOW_MODAL };
}

export function showEditModal(event: IEvent) {
  return { type: SHOW_EDIT_MODAL, payload: event };
}

export function showModalCancelEvent(event: IEvent) {
  return { type: SHOW_MODAL_CANCEL_EVENT, payload: event };
}

export function startFetching() {
  return { type: START_FETCHING };
}

export function fetchingSucess(events: IEvent[]) {
  return { type: FETCHING_SUCESS, payload: events };
}

export function fetchingError(error: any) {
  return { type: FETCHING_ERROR, payload: error };
}

export function closeModalCancelEvent() {
  return { type: CLOSE_MODAL_CANCEL_EVENT };
}
