import React, { useEffect, useReducer, useContext } from "react";
import { OrderItem } from "./OrderItem";
import { IOrder } from "src/partner/models/Order";
import { List } from "src/partner/modules/ui/List/List";
import reducer, {
  initialState,
  fetchOrdersStarted,
  fetchOrdersSucceed,
  fetchOrdersFailured,
} from "src/user/ducks/order";
import { EmptyOrders } from "../EmptyOrders";
import { OrderService } from "src/user/services/OrderService";
import { NotificationContext } from "src/providers";

export const OrderListContainer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const getOrders = async () => {
    try {
      dispatch(fetchOrdersStarted());
      const orders = await OrderService.getUserOrders();
      if (!orders) {
        throw new Error("Error at fetching orders");
      }
      dispatch(fetchOrdersSucceed(orders));
    } catch (err) {
      dispatch(fetchOrdersFailured(err));
      notificationContext.handleShowNotification(err.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const printListOrders = () => {
    return state.orders.map((order: IOrder, idx: number) => <OrderItem key={idx} order={order} />);
  };

  return (
    <List>
      {state.loading && <>Loading</>}
      {state.error && <>{state.error.message}</>}
      {!state.loading && !state.error && state.orders.length === 0 && <EmptyOrders />}
      {!state.loading && !state.error && state.orders.length > 0 && printListOrders()}
    </List>
  );
};
