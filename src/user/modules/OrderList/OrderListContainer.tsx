import React, { useEffect, useReducer, useContext } from "react";
import { OrderItem } from "./OrderItem";
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
import { IOrder } from "src/user/models/Order";

interface IOrderListContainerProps {
  historyView?: boolean;
}

export const OrderListContainer: React.FC<IOrderListContainerProps> = ({ historyView = false }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const getOrders = async () => {
    try {
      dispatch(fetchOrdersStarted());
      const orders = await OrderService.getUserOrders(historyView);
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
    return state.orders.map((order: IOrder, idx: number) => (
      <OrderItem key={order.id} order={order} historyView={historyView} />
    ));
  };

  return <List>{state.orders.length === 0 ? <EmptyOrders /> : printListOrders()}</List>;
};
