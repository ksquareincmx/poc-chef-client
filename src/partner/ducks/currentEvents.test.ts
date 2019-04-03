import {
  IState,
  reducer,
  initialState,
  startFetching,
  fetchingSucess,
  fetchingError,
  showModal,
  closeModal,
  showEditModal,
  updateEvent,
  cancelEvent,
  showModalCancelEvent,
  closeModalCancelEvent,
  createEvent
} from "./currentEvent";
import { IFluxStandardAction } from "src/common/ducks";
import { event, IEvent } from "../models/Event";
import { Item } from "../modules/ui/NavBar/NavBar";

describe("Test currentEvents reducer", () => {
  it("Should return the initial state", () => {
    const emptyAction: IFluxStandardAction = { type: "" };
    const newState: IState = reducer(initialState, emptyAction);
    expect(newState).toEqual(initialState);
  });

  it("test start fetching action type on reducer, should return state with isLoading equal to true", () => {
    const newStateFake = { ...initialState, isLoading: true };
    const newState: IState = reducer(initialState, startFetching());
    expect(newState).toEqual(newStateFake);
  });

  it("test fetching success, should set new events in the state and set isLoading to false", () => {
    const fetchedEvents: IEvent[] = [event(), event()];
    const prevState: IState = { ...initialState, isLoading: true };
    const newStateFake: IState = { ...prevState, isLoading: false, events: fetchedEvents };
    const newState: IState = reducer(prevState, fetchingSucess(fetchedEvents));
    expect(newState).toEqual(newStateFake);
  });

  it("test fetching error, should set isLoading to false and set an error in the state", () => {
    const prevState: IState = { ...initialState, isLoading: true };
    const error = new Error("error at fetchin current events");
    const expectedNewState = { ...prevState, isLoading: false, error };
    const newState: IState = reducer(prevState, fetchingError(error));
    expect(newState).toEqual(expectedNewState);
  });

  it("test showModal, should set openModal to true", () => {
    const expectedNewState = { ...initialState, openModal: true };
    const newState = reducer(initialState, showModal());
    expect(newState).toEqual(expectedNewState);
  });

  it("test openModal, should set openModal to true and set the current event to default event()", () => {
    const expectedNewState = { ...initialState, openModal: false, currentEvent: event() };
    const prevState = { ...initialState, openModal: true };
    const newState = reducer(prevState, closeModal());
    expect(newState).toEqual(expectedNewState);
  });

  it("test showEditModal, Should set editEvento to true, openModal to true, and currentEvent the selected event", () => {
    const selectedEvent = { ...event(), id: "1-a-b-c" };
    const expectedNewState = {
      ...initialState,
      openModal: true,
      editEvent: true,
      currentEvent: selectedEvent
    };
    const newState = reducer(initialState, showEditModal(selectedEvent));
    expect(newState).toEqual(expectedNewState);
  });

  it("test updateEvent, Should update the event from the events array", () => {
    const selectedEvent = { ...event(), id: "1-a-b-c" };
    const prevState = {
      ...initialState,
      openModal: true,
      editEvent: true,
      currentEvent: selectedEvent,
      events: [event(), selectedEvent]
    };
    const modifiedEvent = { ...selectedEvent, name: "event #001" };
    const expectedNewState = {
      ...prevState,
      editEvent: false,
      currentEvent: event(),
      events: [event(), modifiedEvent]
    };
    const newState = reducer(prevState, updateEvent(modifiedEvent));
    expect(newState).toEqual(expectedNewState);
  });

  it("tasts showModalCancelEvent, Should set the selected event as currentEvent, and cancelEvent to true", () => {
    const selectedEvent: IEvent = { ...event(), id: "1-a-b-c" };
    const expectedNewState: IState = {
      ...initialState,
      cancelEvent: true,
      currentEvent: selectedEvent
    };
    const newState = reducer(initialState, showModalCancelEvent(selectedEvent));
    expect(newState).toEqual(expectedNewState);
  });

  it("test cancelEvent, Should set cancelEvent to false, and set currentEvent with the selected event", () => {
    const defaultEvent = event();
    const selectedEvent: IEvent = { ...defaultEvent, id: "1-a-b-c" };
    const events: IEvent[] = [defaultEvent, selectedEvent];
    const prevState: IState = {
      ...initialState,
      cancelEvent: true,
      events,
      currentEvent: selectedEvent
    };
    const expectedNewState: IState = {
      ...prevState,
      events: [defaultEvent],
      currentEvent: defaultEvent,
      cancelEvent: false
    };
    const newState: IState = reducer(prevState, cancelEvent());
    expect(newState).toEqual(expectedNewState);
  });

  it("test closeModalCancelEvent, Should set cancelEvent to false", () => {
    const prevState = { ...initialState, cancelEvent: true };
    const expectedNewState = { ...prevState, cancelEvent: false };
    const newState = reducer(prevState, closeModalCancelEvent());
    expect(newState).toEqual(expectedNewState);
  });

  it("test createEvent, Should create an event and add it to the events array, set openModal to false", () => {
    const newEvent: IEvent = { ...event(), id: "5a5a50", name: "event #01" };
    const expectedNewState = { ...initialState, events: [newEvent], openModal: false };
    const newState = reducer(initialState, createEvent(newEvent));
    expect(newState).toEqual(expectedNewState);
  });
});
