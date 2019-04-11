import reducer, {
  IStateMyOrders,
  initialState,
  fetchUser,
  openCancelOrderModal,
  closeCancelOrderModal,
} from "./myOrders";
import { IFluxStandardAction } from "src/common/ducks";
import { IUser, user } from "src/common/models/User";

describe("Test myOrders reducer", () => {
  it("should return the initial state", () => {
    const emptyAction: IFluxStandardAction = { type: "" };
    const newState: IStateMyOrders = reducer(initialState, emptyAction);
    expect(newState).toEqual(initialState);
  });

  it("test fetching a user, should set a user in the state", () => {
    const fetchedUser: IUser = user();
    const stateAfterFetchingUser: IStateMyOrders = {
      ...initialState,
      user: user(),
    };
    const newState: IStateMyOrders = reducer(
      initialState,
      fetchUser(fetchedUser),
    );
    expect(newState).toEqual(stateAfterFetchingUser);
  });

  it("test modal open, should set openModalCancelEvent to true and currentOrderModalId to the selected order id in the state", () => {
    const fetchedUser: IUser = user();
    const prevState: IStateMyOrders = { ...initialState, user: fetchedUser };
    const stateAfterModalOpen: IStateMyOrders = {
      ...prevState,
      openModalCancelEvent: true,
      currentOrderModalId: "1",
    };
    const newState: IStateMyOrders = reducer(
      prevState,
      openCancelOrderModal("1"),
    );
    expect(newState).toEqual(stateAfterModalOpen);
  });

  it("test modal close, should set openModalCancelEvent to false and currentOrderModalId to empty in the state", () => {
    const fetchedUser: IUser = user();
    const prevState: IStateMyOrders = {
      ...initialState,
      user: fetchedUser,
      openModalCancelEvent: true,
      currentOrderModalId: "1",
    };
    const stateAfterModalClose: IStateMyOrders = {
      ...prevState,
      openModalCancelEvent: false,
      currentOrderModalId: "",
    };
    const newState: IStateMyOrders = reducer(
      prevState,
      closeCancelOrderModal(),
    );
    expect(newState).toEqual(stateAfterModalClose);
  });
});
