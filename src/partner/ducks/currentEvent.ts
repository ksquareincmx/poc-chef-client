import { IEvent, event } from "src/partner/models/Event";
import { IFluxStandardAction } from "src/common/ducks";

export interface IState {
  events: IEvent[];
  isLoading: boolean;
  error: any;
  currentEvent: IEvent;
  cancelEvent: boolean;
  openModal: boolean;
  editEvent: boolean;
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
const FETCH_CURRENT_EVENT_START = "partner/views/currentEvent/FETCH_CURRENT_EVENT_START";
const FETCH_CURRENT_EVENT_SUCCESS = "partner/views/currentEvent/FETCH_CURRENT_EVENT_SUCCESS";
const FETCH_CURRENT_EVENT_FAIL = "partner/views/currentEvent/FETCH_CURRENT_EVENT_FAIL";

function doCancelEvent(state: IState, action: IFluxStandardAction) {
  const eventsUpdated = state.events.filter((e: IEvent) => e.id != state.currentEvent.id);
  return { ...state, events: eventsUpdated, currentEvent: event(), cancelEvent: false };
}

function doCloseModal(state: IState, action: IFluxStandardAction) {
  return { ...state, openModal: false, currentEvent: event() };
}

function doCloseModalCancelEvent(state: IState, action: IFluxStandardAction) {
  return { ...state, cancelEvent: false, currentEvent: event() };
}

function doCreateEvent(state: IState, action: IFluxStandardAction) {
  const updatedEvents: IEvent[] = [...state.events];
  action.payload.orderNumber = "Event: #" + (updatedEvents.length + 1);
  updatedEvents.push(action.payload);
  return { ...state, openModal: false, events: updatedEvents };
}

function doUpdateEvent(state: IState, action: IFluxStandardAction) {
  const currentEvents = state.events.map((ev: IEvent) => {
    if (ev.id === action.payload.id) {
      return action.payload;
    }
    return ev;
  });
  return { ...state, events: currentEvents, currentEvent: event(), editEvent: false };
}

function doShowModal(state: IState, action: IFluxStandardAction) {
  return { ...state, openModal: true };
}

function doShowEditModal(state: IState, action: IFluxStandardAction) {
  return { ...state, currentEvent: action.payload, editEvent: true, openModal: true };
}

function doShowModalCancelEvent(state: IState, action: IFluxStandardAction) {
  return { ...state, cancelEvent: true, currentEvent: action.payload };
}

function doFetchCurrentEventStart(state: IState, action: IFluxStandardAction) {
  return { ...state, isLoading: true };
}

function doFetchCurrentEventSuccess(state: IState, action: IFluxStandardAction) {
  return { ...state, events: action.payload, isLoading: false };
}

function dofetchCurrentEventFail(state: IState, action: IFluxStandardAction) {
  return { ...state, error: action.payload, isLoading: false };
}

export function cancelEvent() {
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
  return { type: FETCH_CURRENT_EVENT_START };
}

export function fetchingSucess(events: IEvent[]) {
  return { type: FETCH_CURRENT_EVENT_SUCCESS, payload: events };
}

export function fetchingError(error: any) {
  return { type: FETCH_CURRENT_EVENT_FAIL, payload: error };
}

export function closeModalCancelEvent() {
  return { type: CLOSE_MODAL_CANCEL_EVENT };
}

export default function reducer(state: IState, action: IFluxStandardAction): IState {
  switch (action.type) {
    case CANCEL_EVENT:
      return doCancelEvent(state, action);
    case CLOSE_MODAL:
      return doCloseModal(state, action);
    case CLOSE_MODAL_CANCEL_EVENT:
      return doCloseModalCancelEvent(state, action);
    case CREATE_EVENT:
      return doCreateEvent(state, action);
    case UPDATE_EVENT:
      return doUpdateEvent(state, action);
    case SHOW_MODAL:
      return doShowModal(state, action);
    case SHOW_EDIT_MODAL:
      return doShowEditModal(state, action);
    case SHOW_MODAL_CANCEL_EVENT:
      return doShowModalCancelEvent(state, action);
    case FETCH_CURRENT_EVENT_START:
      return doFetchCurrentEventStart(state, action);
    case FETCH_CURRENT_EVENT_SUCCESS:
      return doFetchCurrentEventSuccess(state, action);
    case FETCH_CURRENT_EVENT_FAIL:
      return dofetchCurrentEventFail(state, action);
    default:
      return state;
  }
}
