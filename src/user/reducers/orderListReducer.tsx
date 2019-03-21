import { orderService } from "src/user/services/OrderService";

export const module = "user/OrderListContainer/";
export const FETCHING = `${module}/START_FETCH`;
export const FETCHING_SUCCESS = `${module}/FETCH_SUCCESS`;
export const FETCHING_FAILURE = `${module}/FETCH_FAILURE`;

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
  payload?: any;
  error?: boolean;
  meta?: any;
}

type dispatchType = (action: Iaction) => void;

export default function reducer(state: IState, action: Iaction): IState {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true };
    case FETCHING_SUCCESS:
      return { loading: false, orders: action.payload, error: true };
    case FETCHING_FAILURE:
      return { loading: false, orders: [], error: true };
    default:
      return state;
  }
}

export const getOrders = async (userId: number, dispatch: dispatchType) => {
  startFechthing(dispatch);
  try {
    const orders = await orderService.getOrdersByUserId(userId);
    dispatch({ type: FETCHING_SUCCESS, payload: orders, error: false });
  } catch (err) {
    dispatch({ type: FETCHING_FAILURE, payload: "ERROR", error: true });
  }
};

export const startFechthing = (dispatch: dispatchType) => {
  dispatch({ type: FETCHING });
};
