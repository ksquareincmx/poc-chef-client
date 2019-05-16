import reducer, {
  IStateEvent,
  initialState,
  fetchEventStarted,
  fetchEventSucceed,
  fetchEventFailed,
} from "./event";
import { IFluxStandardAction } from "src/common/ducks";
import { event, IEvent } from "../models/Event";

describe(" Test event Reducer", () => {
  it("should return the initial State", () => {
    const emptyAction: IFluxStandardAction = { type: "" };
    const newState: IStateEvent = reducer(initialState, emptyAction);
    expect(newState).toEqual(initialState);
  });

  it("test fetching start, should return state with isLoading equal to true", () => {
    const stateAfterStartedFetching = { ...initialState, isLoading: true };
    const newState = reducer(initialState, fetchEventStarted());
    expect(newState).toEqual(stateAfterStartedFetching);
  });

  it("test fetching success, should set new event to localEvent and isLoading equal to false", () => {
    const prevState: IStateEvent = { ...initialState, isLoading: true };
    const fetchedEvent: IEvent = event();
    const stateAfterSuccessfulFetching: IStateEvent = {
      ...prevState,
      isLoading: false,
      localEvent: fetchedEvent,
    };
    const newState: IStateEvent = reducer(prevState, fetchEventSucceed(fetchedEvent));
    expect(newState).toEqual(stateAfterSuccessfulFetching);
  });

  it("test fetching error, should set isLoading equal to false, also set an event and an error in the state", () => {
    const prevState: IStateEvent = { ...initialState, isLoading: true };
    const error: Error = new Error("It was an error fetching the event");
    const stateAfterFailedFetching: IStateEvent = {
      ...prevState,
      isLoading: false,
      localEvent: event(),
      error,
    };
    const newState: IStateEvent = reducer(prevState, fetchEventFailed(error));
    expect(newState).toEqual(stateAfterFailedFetching);
  });
});
