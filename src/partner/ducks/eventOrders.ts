import { IOrder } from "../models/Order";
import { EventService } from "../services";

export const MODULE = "partner/eventOrders/";
export const FETCH_EVENT_ORDERS_START = `${MODULE}/FETCH_EVENT_ORDERS_START`;
export const FETCH_EVENT_ORDERS_SUCCESS = `${MODULE}/FETCH_EVENT_ORDERS_SUCCESS`;
export const FETCH_EVENT_ORDERS_FAIL = `${MODULE}/FETCH_EVENT_ORDERS_FAIL`;

export const EVENT_ORDERS_CHECK_ALL_UNPAID = `${MODULE}/EVENT_ORDERS_CHECK_ALL_UNPAID`;
export const EVENT_ORDERS_CHECK_ALL_PAID = `${MODULE}/EVENT_ORDERS_CHECK_ALL_PAID`;
export const EVENT_ORDERS_CHECK_ONE = `${MODULE}/EVENT_ORDERS_CHECK_ONE`;
export const EVENT_ORDERS_CHECK_ONE_PAID = `${MODULE}/EVENT_ORDERS_CHECK_ONE_PAID`;
export const EVENT_ORDERS_CHECK_ONE_UNPAID = `${MODULE}/EVENT_ORDERS_CHECK_ONE_UNPAID`;
export const MOVE_CHECKED_ORDERS_TO_PAID = `${MODULE}/MOVE_CHECKED_ORDERS_TO_PAID`;
export const MOVE_CHECKED_ORDERS_TO_UNPAID = `${MODULE}/MOVE_CHECKED_ORDERS_TO_UNPAID`;

export interface IAction {
  type: string;
  payload?: any;
  meta?: any;
  error?: boolean;
}

export interface IEventOrdersState {
  isLoading: boolean;
  orders: IOrder[];
  error?: Error;
  paidOrders: IOrder[];
  unpaidOrders: IOrder[];
}

export const initialEventOrdersState: IEventOrdersState = {
  isLoading: false,
  orders: [],
  error: undefined,
  paidOrders: [],
  unpaidOrders: []
};

type dispatchType = (action: IAction) => void;

export default function reducerEventOrders(
  state: IEventOrdersState,
  action: IAction
): IEventOrdersState {
  switch (action.type) {
    case FETCH_EVENT_ORDERS_START:
      return { ...state, isLoading: true };
    case FETCH_EVENT_ORDERS_SUCCESS:
      const ordersInitial = [...action.payload];
      const paidOrdersInitial = ordersInitial.filter((o: IOrder) => o.paid);
      const unpaidOrdersInitial = ordersInitial.filter((o: IOrder) => !o.paid);
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
        paidOrders: paidOrdersInitial,
        unpaidOrders: unpaidOrdersInitial
      };
    case FETCH_EVENT_ORDERS_FAIL:
      return { ...state, isLoading: false, orders: [], error: action.payload };
    case EVENT_ORDERS_CHECK_ALL_PAID:
      let { paidOrders } = state;
      paidOrders = paidOrders.map((order: IOrder) => ((order.checked = action.payload), order));
      return { ...state, paidOrders };
    case EVENT_ORDERS_CHECK_ALL_UNPAID:
      let { unpaidOrders } = state;
      unpaidOrders = unpaidOrders.map((order: IOrder) => ((order.checked = action.payload), order));
      return { ...state, unpaidOrders };
    case EVENT_ORDERS_CHECK_ONE_PAID:
      let newPaidOrdersChecked = state.paidOrders.map((order: IOrder) => {
        if (order.id === action.payload.orderId) {
          order.checked = action.payload.checked;
        }
        return order;
      });
      return { ...state, paidOrders: newPaidOrdersChecked };
    case EVENT_ORDERS_CHECK_ONE_UNPAID:
      let newUnpaidOrdersChecked = state.unpaidOrders.map((order: IOrder) => {
        if (order.id === action.payload.orderId) {
          order.checked = action.payload.checked;
        }
        return order;
      });
      return { ...state, unpaidOrders: newUnpaidOrdersChecked };
    case MOVE_CHECKED_ORDERS_TO_PAID:
      const checkedUnpaidOrders = state.unpaidOrders.filter((order: IOrder) => order.checked);
      const uncheckedUnpaidOrders = state.unpaidOrders.filter((order: IOrder) => !order.checked);
      return {
        ...state,
        paidOrders: [...state.paidOrders, ...checkedUnpaidOrders],
        unpaidOrders: uncheckedUnpaidOrders
      };
    case MOVE_CHECKED_ORDERS_TO_UNPAID:
      const checkedPaidOrders = state.paidOrders.filter((order: IOrder) => order.checked);
      const uncheckedPaidOrders = state.paidOrders.filter((order: IOrder) => !order.checked);
      return {
        ...state,
        unpaidOrders: [...state.unpaidOrders, ...checkedPaidOrders],
        paidOrders: [...uncheckedPaidOrders]
      };
    default:
      return state;
  }
}

export const fetchEventOrdersStarted = () => {
  return { type: FETCH_EVENT_ORDERS_START };
};

export const fetchEventOrdersSucceed = (event: IOrder[]) => {
  return { type: FETCH_EVENT_ORDERS_SUCCESS, payload: event };
};

export const fetchEventOrdersFailed = (error: Error) => {
  return { type: FETCH_EVENT_ORDERS_FAIL, payload: error };
};

export const checkAllPaidOrders = (checked: boolean) => {
  return { type: EVENT_ORDERS_CHECK_ALL_PAID, payload: checked };
};

export const checkAllUnpaidOrders = (checked: boolean) => {
  return { type: EVENT_ORDERS_CHECK_ALL_UNPAID, payload: checked };
};

export const checkPaidOrderById = (orderId: string, checked: boolean) => {
  return { type: EVENT_ORDERS_CHECK_ONE_PAID, payload: { orderId, checked } };
};

export const checkUnpaidOrderById = (orderId: string, checked: boolean) => {
  return { type: EVENT_ORDERS_CHECK_ONE_UNPAID, payload: { orderId, checked } };
};

export const moveCheckedOrdersToPaid = () => {
  return { type: MOVE_CHECKED_ORDERS_TO_PAID };
};

export const moveCheckedOrdersToUnpaid = () => {
  return { type: MOVE_CHECKED_ORDERS_TO_UNPAID };
};

export const moveOrders = (paidTab: boolean, dispatch: dispatchType) => {
  if (paidTab) {
    dispatch(moveCheckedOrdersToUnpaid());
  } else {
    dispatch(moveCheckedOrdersToPaid());
  }
};

export const checkAllOrders = (paidOrders: boolean, checked: boolean, dispatch: dispatchType) => {
  if (paidOrders) {
    dispatch(checkAllPaidOrders(checked));
  } else {
    dispatch(checkAllUnpaidOrders(checked));
  }
};

export const checkOneOrderById = (
  paidOrders: boolean,
  checked: boolean,
  orderId: string,
  dispatch: dispatchType
) => {
  if (paidOrders) {
    dispatch(checkPaidOrderById(orderId, checked));
  } else {
    dispatch(checkUnpaidOrderById(orderId, checked));
  }
};

export const fetchEventOrders = async (eventId: string, dispatch: dispatchType) => {
  dispatch(fetchEventOrdersStarted());
  try {
    const orders = await EventService.eventService.getOrdersByEventId(eventId);
    dispatch(fetchEventOrdersSucceed(orders));
  } catch (err) {
    dispatch(fetchEventOrdersFailed(new Error("error at fetching event's orders")));
  }
};
