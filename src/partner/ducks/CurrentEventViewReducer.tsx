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

export const reducer = (state: IState, action: IActions): IState => {
  switch (action.type) {
    case "CANCEL_EVENT":
      return { ...state, events: action.payload, currentEvent: event(), cancelEvent: false };
    case "CLOSE_MODAL":
      return { ...state, openModal: false, currentEvent: event() };
    case "CLOSE_MODAL_CANCEL_EVENT":
      return { ...state, cancelEvent: false, currentEvent: event() };
    case "CREATE_EVENT":
      return { ...state, openModal: false, events: action.payload };
    case "UPDATE_EVENT":
      return { ...state, events: action.payload, currentEvent: event(), editEvent: false };
    case "SHOW_MODAL":
      return { ...state, openModal: true };

    case "SHOW_EDIT_MODAL":
      return { ...state, currentEvent: action.payload, editEvent: true, openModal: true };
    case "SHOW_MODAL_CANCEL_EVENT":
      return { ...state, cancelEvent: true, currentEvent: action.payload };
    case "START_FETCHING":
      return { ...state, isLoading: true };
    case "FETCHING_SUCESS":
      return { ...state, events: action.payload, isLoading: false };
    case "FETCHING_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export function cancelEvent(events: IEvent[], currentEvent: IEvent) {
  const eventsUpdated = events.filter((e: IEvent) => e.id != currentEvent.id);
  return {
    type: "CANCEL_EVENT",
    payload: eventsUpdated,
  };
}

export function createEvent(events: IEvent[], event: IEvent) {
  const updatedEvents: IEvent[] = [...events];
  event.orderNumber = "Event: #" + (updatedEvents.length + 1);
  updatedEvents.push(event);
  return { type: "CREATE_EVENT", payload: updatedEvents };
}
export function closeModal() {
  return { type: "CLOSE_MODAL" };
}

export function updateEvent(events: IEvent[], event: IEvent) {
  const currentEvents = events.map((ev: IEvent) => {
    if (ev.id === event.id) {
      return event;
    }
    return ev;
  });

  return { type: "UPDATE_EVENT", payload: currentEvents };
}

export function showModal() {
  return { type: "SHOW_MODAL" };
}

export function showEditModal(event: IEvent) {
  return { type: "SHOW_EDIT_MODAL", payload: event };
}

export function showModalCancelEvent(event: IEvent) {
  return { type: "SHOW_MODAL_CANCEL_EVENT", payload: event };
}

export function startFetching() {
  return { type: "START_FETCHING" };
}

export function fetchingSucess(events: IEvent[]) {
  return { type: "FETCHING_SUCESS", payload: events };
}

export function fetchingError(error: any) {
  return { type: "FETCHING_ERROR", payload: error };
}

export function closeModalCancelEvent() {
  return { type: "CLOSE_MODAL_CANCEL_EVENT" };
}
