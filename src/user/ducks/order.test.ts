import reducer, {
  IOrderState,
  initialState,
  fetchOrdersStarted,
  fetchOrdersSucceed,
  fetchOrdersFailured,
} from "./order";
import { IFluxStandardAction } from "src/common/ducks";
import { IOrder, order } from "src/partner/models/Order";

describe("Test orders reducer", () => {
  it("should return initial state", () => {
    const emptyAction: IFluxStandardAction = { type: "" };
    const newState: IOrderState = reducer(initialState, emptyAction);
    expect(newState).toEqual(initialState);
  });

  it("test fetching start, should set loading equal to true", () => {
    const stateAFterStartedFetching: IOrderState = {
      ...initialState,
      loading: true,
    };
    const newState = reducer(initialState, fetchOrdersStarted());
    expect(newState).toEqual(stateAFterStartedFetching);
  });

  it("test fetching success, should set orders to Orders and loading equal to false", () => {
    const prevState: IOrderState = { ...initialState, loading: true };
    const orders: IOrder[] = [(order(), order())];
    const stateAfterFetchingSuccess: IOrderState = {
      ...prevState,
      loading: false,
      orders,
    };
    const newState = reducer(prevState, fetchOrdersSucceed(orders));
    expect(newState).toEqual(stateAfterFetchingSuccess);
  });

  it("test fetching failure, should set, should set", () => {
    const prevState: IOrderState = { ...initialState, loading: true };
    const error: Error = new Error("Error at fetching orders");
    const stateAfterFailure = {
      ...prevState,
      loading: false,
      orders: [],
      error,
    };
    const newState: IOrderState = reducer(
      prevState,
      fetchOrdersFailured(error),
    );
    expect(newState).toEqual(stateAfterFailure);
  });
});
