import { IOrder } from "../models/Order";
import { EventService } from "../services";
import { IFluxStandardAction, ReduxDispatch } from "src/common/ducks/index";

export const MODULE = "partner/eventOrders/";
export const FETCH_ALL_ORDERS_BY_EVENT_ID_START = `${MODULE}/FETCH_EVENT_ORDERS_START`;
export const FETCH_ALL_ORDERS_BY_EVENT_ID_SUCCESS = `${MODULE}/FETCH_EVENT_ORDERS_SUCCESS`;
export const FETCH_ALL_ORDERS_BY_ID_FAIL = `${MODULE}/FETCH_EVENT_ORDERS_FAIL`;

export const EVENT_ORDERS_CHECK_ALL_UNPAID = `${MODULE}/EVENT_ORDERS_CHECK_ALL_UNPAID`;
export const EVENT_ORDERS_CHECK_ALL_PAID = `${MODULE}/EVENT_ORDERS_CHECK_ALL_PAID`;
export const EVENT_ORDERS_CHECK_ONE_PAID = `${MODULE}/EVENT_ORDERS_CHECK_ONE_PAID`;
export const EVENT_ORDERS_CHECK_ONE_UNPAID = `${MODULE}/EVENT_ORDERS_CHECK_ONE_UNPAID`;
export const MOVE_CHECKED_ORDERS_TO_PAID = `${MODULE}/MOVE_CHECKED_ORDERS_TO_PAID`;
export const MOVE_CHECKED_ORDERS_TO_UNPAID = `${MODULE}/MOVE_CHECKED_ORDERS_TO_UNPAID`;

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

export default function reducerEventOrders(
  state: IEventOrdersState,
  action: IFluxStandardAction
): IEventOrdersState {
  switch (action.type) {
    case FETCH_ALL_ORDERS_BY_EVENT_ID_START:
      return fetchAllOrdersByEventIdStart(state, action);
    case FETCH_ALL_ORDERS_BY_EVENT_ID_SUCCESS:
      return fetchAllOrdersByEventIdSuccess(state, action);
    case FETCH_ALL_ORDERS_BY_ID_FAIL:
      return fetchAllOrdersByIdFail(state, action);
    case EVENT_ORDERS_CHECK_ALL_PAID:
      return eventOrdersCheckAllPAid(state, action);
    case EVENT_ORDERS_CHECK_ALL_UNPAID:
      return eventOrdersCheckAllUnpaid(state, action);
    case EVENT_ORDERS_CHECK_ONE_PAID:
      return eventOrdersCheckOne(state, action, true);
    case EVENT_ORDERS_CHECK_ONE_UNPAID:
      return eventOrdersCheckOne(state, action, false);
    case MOVE_CHECKED_ORDERS_TO_PAID:
      return moveCheckedOrdersToPaidTab(state, action);
    case MOVE_CHECKED_ORDERS_TO_UNPAID:
      return moveCheckedOrdersToUnpaidTab(state, action);
    default:
      return state;
  }
}

function fetchAllOrdersByEventIdStart(state: IEventOrdersState, action: IFluxStandardAction) {
  return { ...state, isLoading: true };
}

function fetchAllOrdersByEventIdSuccess(state: IEventOrdersState, action: IFluxStandardAction) {
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
}

function fetchAllOrdersByIdFail(state: IEventOrdersState, action: IFluxStandardAction) {
  return { ...state, isLoading: false, orders: [], error: action.payload };
}

function eventOrdersCheckAllPAid(state: IEventOrdersState, action: IFluxStandardAction) {
  const paidOrders = state.paidOrders.map(
    (order: IOrder) => ((order.checked = action.payload), order)
  );
  return { ...state, paidOrders };
}

function eventOrdersCheckAllUnpaid(state: IEventOrdersState, action: IFluxStandardAction) {
  const unpaidOrders = state.unpaidOrders.map(
    (order: IOrder) => ((order.checked = action.payload), order)
  );
  return { ...state, unpaidOrders };
}

function eventOrdersCheckOne(state: IEventOrdersState, action: IFluxStandardAction, paid: boolean) {
  const paidKey = paid ? "paidOrders" : "unpaidOrders";
  const orders = state[paidKey].map((order: IOrder) => {
    if (order.id === action.payload.orderId) {
      order.checked = action.payload.checked;
    }
    return order;
  });
  return { ...state, [paidKey]: orders };
}

function moveCheckedOrdersToPaidTab(state: IEventOrdersState, action: IFluxStandardAction) {
  const checkedUnpaidOrders = state.unpaidOrders.filter((order: IOrder) => order.checked);
  const uncheckedUnpaidOrders = state.unpaidOrders.filter((order: IOrder) => !order.checked);
  return {
    ...state,
    paidOrders: [...state.paidOrders, ...checkedUnpaidOrders],
    unpaidOrders: uncheckedUnpaidOrders
  };
}

function moveCheckedOrdersToUnpaidTab(state: IEventOrdersState, action: IFluxStandardAction) {
  const checkedPaidOrders = state.paidOrders.filter((order: IOrder) => order.checked);
  const uncheckedPaidOrders = state.paidOrders.filter((order: IOrder) => !order.checked);
  return {
    ...state,
    unpaidOrders: [...state.unpaidOrders, ...checkedPaidOrders],
    paidOrders: [...uncheckedPaidOrders]
  };
}

export const fetchEventOrdersStarted = () => {
  return { type: FETCH_ALL_ORDERS_BY_EVENT_ID_START };
};

export const fetchEventOrdersSucceed = (event: IOrder[]) => {
  return { type: FETCH_ALL_ORDERS_BY_EVENT_ID_SUCCESS, payload: event };
};

export const fetchEventOrdersFailed = (error: Error) => {
  return { type: FETCH_ALL_ORDERS_BY_ID_FAIL, payload: error };
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

export const fetchEventOrders = async (eventId: string, dispatch: ReduxDispatch) => {
  dispatch(fetchEventOrdersStarted());
  try {
    const orders = await EventService.eventService.getOrdersByEventId(eventId);
    dispatch(fetchEventOrdersSucceed(orders));
  } catch (err) {
    dispatch(fetchEventOrdersFailed(new Error("error at fetching event's orders")));
  }
};
