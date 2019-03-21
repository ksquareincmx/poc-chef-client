import { orderService } from "src/user/services/OrderService";
import { IOrder } from "src/partner/models/Order";

export const module = "user/OrderListContainer/";
export const FETCH_ORDERS_START = `${module}/FETCH_ORDERS_START`;
export const FETCH_ORDERS_SUCCESS = `${module}/FETCH_ORDERS_SUCCESS`;
export const FETCH_ORDERS_FAIL = `${module}/FETCH_ORDERS_FAIL`;

export const initialState: IState = {
  orders: [],
  loading: false,
  error: undefined
};

interface IState {
  orders: IOrder[];
  loading: boolean;
  error?: Error;
}

export interface IAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

type dispatchType = (action: IAction) => void;

export default function reducer(state: IState, action: IAction): IState {
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
  return { type: FETCH_ORDERS_SUCCESS, payload: orders, error: false };
};

export const fetchOrdersFailured = (error: Error) => {
  return { type: FETCH_ORDERS_FAIL, payload: error, error: true };
};

export const getOrders = async (userId: number, dispatch: dispatchType) => {
  dispatch(fetchOrdersStarted());
  try {
    const orders = await orderService.getOrdersByUserId(userId);
    dispatch(fetchOrdersSucceed(orders));
  } catch (err) {
    dispatch(fetchOrdersFailured(new Error("error at fetching orders")));
  }
};
