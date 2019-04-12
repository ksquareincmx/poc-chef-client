import { IFluxStandardAction, ReduxDispatch } from "src/common/ducks";
import { orderService } from "src/user/services/OrderService";
import { IOrder } from "src/partner/models/Order";

export const module = "user/OrderListContainer/";
export const FETCH_ORDERS_START = `${module}/FETCH_ORDERS_START`;
export const FETCH_ORDERS_SUCCESS = `${module}/FETCH_ORDERS_SUCCESS`;
export const FETCH_ORDERS_FAIL = `${module}/FETCH_ORDERS_FAIL`;

export interface IOrderState {
  orders: IOrder[];
  loading: boolean;
  error?: Error;
}
export const initialState: IOrderState = {
  orders: [],
  loading: false,
  error: undefined,
};

export default function reducer(
  state: IOrderState,
  action: IFluxStandardAction,
): IOrderState {
  switch (action.type) {
    case FETCH_ORDERS_START:
      return { ...state, loading: true };
    case FETCH_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case FETCH_ORDERS_FAIL:
      return { loading: false, orders: [], error: action.payload };
    default:
      return state;
  }
}

export const fetchOrdersStarted = () => {
  return { type: FETCH_ORDERS_START };
};

export const fetchOrdersSucceed = (orders: IOrder[]) => {
  return { type: FETCH_ORDERS_SUCCESS, payload: orders };
};

export const fetchOrdersFailured = (error: Error) => {
  return { type: FETCH_ORDERS_FAIL, payload: error };
};

export const getOrders = async (userId: string, dispatch: ReduxDispatch) => {
  dispatch(fetchOrdersStarted());
  try {
    const orders = await orderService.getOrdersByUserId(userId);
    dispatch(fetchOrdersSucceed(orders));
  } catch (err) {
    dispatch(fetchOrdersFailured(new Error("error at fetching orders")));
  }
};
