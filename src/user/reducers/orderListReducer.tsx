import { orderService } from "src/user/services/OrderService";

export const FETCHING = "OrderListContainer/FETCHING";
export const FETCHING_FINISHED = "OrderListContainer/FETCHING_FINISHED";

export const initialState: IState = {
  orders: [],
  loading: false,
  error: false
};

interface IState {
  orders: [];
  loading: boolean;
  error: boolean;
}

export interface Iaction {
  type: string;
  payload: any;
  error?: boolean;
  meta?: any;
}

export default function reducer(state: IState, action: Iaction): IState {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true };
    case FETCHING_FINISHED:
      return {
        loading: false,
        orders: action.error ? [] : action.payload,
        error: action.error ? action.error : false
      };
    default:
      return state;
  }
}

export const getOrders = async (userId: number, dispatch: (action: any) => void) => {
  const orders = await orderService.getOrdersByUserId(userId);
  if (orders) {
    dispatch({ type: FETCHING_FINISHED, payload: orders, error: false });
  } else {
    dispatch({ type: FETCHING_FINISHED, payload: orders, error: true });
  }
};

export const startFechthing = (dispatch: (action: any) => void) => {
  dispatch({ type: FETCHING });
};
