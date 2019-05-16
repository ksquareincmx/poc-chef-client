import {
  IState,
  reducer,
  initialState,
  startFetching,
  fetchingSucess,
  fetchingError,
} from "./currentEvent";
import { IFluxStandardAction } from "src/common/ducks";
import { event, IEvent } from "../models/Event";

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
});
