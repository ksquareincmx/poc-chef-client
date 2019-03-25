import { IFluxStandardAction } from "src/common/ducks";

const MODULE = "user/myOrders";
const OPEN_CANCEL_ORDER_MODAL = `${MODULE}/OPEN_CANCEL_ORDER_MODAL`;

export interface IstateMyOrders {
  openModalCancelEvent: boolean;
  currentOrderModal: string;
}

export const initialStateOrders: IstateMyOrders = {
  openModalCancelEvent: false,
  currentOrderModal: ""
};

export default function reducerMyOrders(
  state: IstateMyOrders,
  action: IFluxStandardAction
): IstateMyOrders {
  switch (action.type) {
    case OPEN_CANCEL_ORDER_MODAL:
      return doOpenCancelOrderModal(state, action);
    default:
      return state;
  }
}

function doOpenCancelOrderModal(
  state: IstateMyOrders,
  action: IFluxStandardAction
): IstateMyOrders {
  const { open, orderId } = action.payload;
  return { ...state, openModalCancelEvent: open, currentOrderModal: orderId };
}

export const openCancelOrderModal = (open: boolean, orderId: string = "") => {
  return { type: OPEN_CANCEL_ORDER_MODAL, payload: { open, orderId } };
};
