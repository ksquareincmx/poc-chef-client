import { IFluxStandardAction } from "src/common/ducks";

const MODULE = "user/myOrders";
const OPEN_CANCEL_ORDER_MODAL = `${MODULE}/OPEN_CANCEL_ORDER_MODAL`;
const CLOSE_CANCEL_ORDER_MODAL = `${MODULE}/CLOSE_CANCEL_ORDER_MODAL`;

export interface IstateMyOrders {
  openModalCancelEvent: boolean;
  currentOrderModalId: string;
}

export const initialStateOrders: IstateMyOrders = {
  openModalCancelEvent: false,
  currentOrderModalId: ""
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

export const openCancelOrderModal = (orderId: string) => {
  return { type: OPEN_CANCEL_ORDER_MODAL, payload: orderId };
};

export const closeCancelOrderModal = () => {
  return { type: CLOSE_CANCEL_ORDER_MODAL };
};
