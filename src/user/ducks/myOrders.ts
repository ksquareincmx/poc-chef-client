import { IFluxStandardAction, ReduxDispatch } from "src/common/ducks";
import { IUser, user } from "src/common/models/User";
import { userService } from "src/common/services/UserService";

const MODULE = "user/myOrders";
const OPEN_CANCEL_ORDER_MODAL = `${MODULE}/OPEN_CANCEL_ORDER_MODAL`;
const CLOSE_CANCEL_ORDER_MODAL = `${MODULE}/CLOSE_CANCEL_ORDER_MODAL`;
const FETCH_USER = `${MODULE}/FETCH_USER`;

export interface IstateMyOrders {
  openModalCancelEvent: boolean;
  currentOrderModalId: string;
  user: IUser;
}

export const initialStateOrders: IstateMyOrders = {
  openModalCancelEvent: false,
  currentOrderModalId: "",
  user: user()
};

export default function reducerMyOrders(
  state: IstateMyOrders,
  action: IFluxStandardAction
): IstateMyOrders {
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

function doOpenCancelOrderModal(
  state: IstateMyOrders,
  action: IFluxStandardAction
): IstateMyOrders {
  return { ...state, openModalCancelEvent: true, currentOrderModalId: action.payload };
}

function doCloseCancelOrderModal(
  state: IstateMyOrders,
  action: IFluxStandardAction
): IstateMyOrders {
  return { ...state, openModalCancelEvent: false, currentOrderModalId: "" };
}

function doFetchUser(state: IstateMyOrders, action: IFluxStandardAction): IstateMyOrders {
  return { ...state, user: action.payload };
}

export const openCancelOrderModal = (orderId: string) => {
  return { type: OPEN_CANCEL_ORDER_MODAL, payload: orderId };
};

export const closeCancelOrderModal = () => {
  return { type: CLOSE_CANCEL_ORDER_MODAL };
};

export const fetchUser = (user: IUser) => {
  return { type: FETCH_USER, payload: user };
};

export const getUser = async (dispatch: ReduxDispatch) => {
  try {
    const user = await userService.getCurrentUser();
    dispatch(fetchUser(user));
  } catch (err) {
    console.error(err);
  }
};
