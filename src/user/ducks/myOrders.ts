import { IUser, user } from "src/common/models/User";
import { IFluxStandardAction, ReduxDispatch } from "src/common/ducks";
import { userService } from "src/common/services/UserService";

export interface IStateMyOrders {
  openModalCancelEvent: boolean;
  currentOrderModalId: string;
  user: IUser;
}

export const initialState: IStateMyOrders = {
  openModalCancelEvent: false,
  currentOrderModalId: "",
  user: user(),
};

const doOpenCancelOrderModal = (
  state: IStateMyOrders,
  action: IFluxStandardAction,
): IStateMyOrders => {
  return {
    ...state,
    openModalCancelEvent: true,
    currentOrderModalId: action.payload,
  };
};

const doCloseCancelOrderModal = (
  state: IStateMyOrders,
  action: IFluxStandardAction,
): IStateMyOrders => {
  return { ...state, openModalCancelEvent: false, currentOrderModalId: "" };
};

const doFetchUser = (
  state: IStateMyOrders,
  action: IFluxStandardAction,
): IStateMyOrders => {
  return { ...state, user: action.payload };
};

const MODULE = "user/myOrders";
const OPEN_CANCEL_ORDER_MODAL = `${MODULE}/OPEN_CANCEL_ORDER_MODAL`;
const CLOSE_CANCEL_ORDER_MODAL = `${MODULE}/CLOSE_CANCEL_ORDER_MODAL`;
const FETCH_USER = `${MODULE}/FETCH_USER`;

export default function reducerMyOrders(
  state: IStateMyOrders,
  action: IFluxStandardAction,
): IStateMyOrders {
  switch (action.type) {
    case OPEN_CANCEL_ORDER_MODAL:
      return doOpenCancelOrderModal(state, action);
    case CLOSE_CANCEL_ORDER_MODAL:
      return doCloseCancelOrderModal(state, action);
    case FETCH_USER:
      return doFetchUser(state, action);
    default:
      return state;
  }
}

export const fetchUser = (user: IUser) => {
  return { type: FETCH_USER, payload: user };
};

export const openCancelOrderModal = (orderId: string) => {
  return { type: OPEN_CANCEL_ORDER_MODAL, payload: orderId };
};

export const closeCancelOrderModal = () => {
  return { type: CLOSE_CANCEL_ORDER_MODAL };
};

export const getUser = async (dispatch: ReduxDispatch) => {
  try {
    const user = await userService.getCurrentUser();
    dispatch(fetchUser(user));
  } catch (err) {
    console.error(err);
  }
};
