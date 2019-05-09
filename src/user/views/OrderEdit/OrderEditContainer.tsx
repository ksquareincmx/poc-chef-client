import React, { useState, useEffect, useContext } from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { GradientButton } from "src/common/ui/Buttons";
import { TextTable, TextTitleCardEvent } from "src/common/ui/Text";
import { ProductsListContainer } from "src/user/modules/ProductsEditListContainer";
import { OrderService } from "src/user/services/OrderService";
import { IOrder, order } from "src/user/models/Order";
import { RouteComponentProps, withRouter } from "react-router";
import { NotificationContext } from "src/providers";
import { DateMapper } from "src/common/mappers";
import { USER_MY_ORDERS_ROUTE } from "src/user/routes";
import { getPriceFormat } from "src/common/utils";

interface IOrderEditContainerComponentProps {
  match: { params: { id: string } };
}

const OrderEditContainerComponent: React.FC<
  RouteComponentProps & IOrderEditContainerComponentProps
> = ({ history, match: { params } }) => {
  const [orderState, setOrderState] = useState<IOrder>(order());
  const notification = useContext(NotificationContext.NotificationContext);

  const fetchOrder = async () => {
    try {
      const order = await OrderService.getOrder(params.id);
      if (order.id) {
        setOrderState(order);
      }
    } catch (err) {
      notification.handleShowNotification(err.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleAddUnit = (idProduct: string) => {
    const product = { ...orderState.products[idProduct] };
    product.quantity += 1;
    product.subtotal = product.quantity * product.price;
    setOrderState({ ...orderState, products: { ...orderState.products, [idProduct]: product } });
  };

  const handleMinusUnit = (idProduct: string) => {
    const product = { ...orderState.products[idProduct] };
    if (product.quantity === 0) {
      return;
    }

    product.quantity -= 1;
    product.subtotal = product.quantity * product.price;
    setOrderState({ ...orderState, products: { ...orderState.products, [idProduct]: product } });
  };

  useEffect(
    function updateOrderTotal() {
      const total = Object.keys(orderState.products).reduce(
        (a, b) => a + orderState.products[b].subtotal,
        0,
      );
      setOrderState({ ...orderState, total });
    },
    [orderState.products],
  );

  const handleRemoveProduct = (idProduct: string) => {
    const products = { ...orderState.products };
    delete products[idProduct];
    setOrderState({ ...orderState, products });
  };

  const saveChanges = async () => {
    try {
      if (orderState.total === 0) {
        return notification.handleShowNotification("add a product to your order");
      }

      const order = await OrderService.putOrder({ ...orderState });

      if (order.id) {
        history.push(USER_MY_ORDERS_ROUTE);
      } else {
        throw new Error("Error at updating order");
      }
    } catch (err) {
      notification.handleShowNotification(err.message);
    }
  };

  const handleOnChangeInput = (idProduct: string) => {
    //handle onChange product
  };

  return (
    <React.Fragment>
      <CardContainer>
        <CardRowHeader style={{ padding: ".5rem 1rem .475rem 1rem" }}>
          <div style={{ display: "grid", gridGap: ".25rem" }}>
            <TextTitleCardEvent align="left">{orderState.eventName}</TextTitleCardEvent>
            <TextTable align="left">{DateMapper.unixDateToString(orderState.createdAt)}</TextTable>
          </div>
          <TextTable align="right">Order #{orderState.orderNumber}</TextTable>
        </CardRowHeader>
        <ProductsListContainer
          products={orderState.products}
          handleAddUnit={handleAddUnit}
          handleMinusUnit={handleMinusUnit}
          handleRemoveProduct={handleRemoveProduct}
          handleOnChangeInput={handleOnChangeInput}
          enableDeleteButton={true}
        />
        <CardRowHeader style={{ padding: ".5rem 1rem .475rem 1rem" }}>
          <TextTitleCardEvent align="left">Total</TextTitleCardEvent>
          <TextTitleCardEvent aling="right">{getPriceFormat(orderState.total)}</TextTitleCardEvent>
        </CardRowHeader>
      </CardContainer>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <GradientButton onClick={saveChanges}>SAVE CHANGES</GradientButton>
      </div>
    </React.Fragment>
  );
};

export const OrderEditContainer = withRouter(OrderEditContainerComponent);
