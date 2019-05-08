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

interface IOrderEditContainerComponentProps {
  match: { params: { id: string } };
}

const OrderEditContainerComponent: React.FC<
  RouteComponentProps & IOrderEditContainerComponentProps
> = ({ match: { params } }) => {
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
    //handleRemoveProduct
  };

  const saveChanges = () => {
    //save order changes
  };

  const handleOnChangeInput = (idProduct: string) => {
    //handle onChange product
  };

  return (
    <React.Fragment>
      <CardContainer>
        <CardRowHeader style={{ padding: ".5rem 1rem .475rem 1rem" }}>
          <div style={{ display: "grid", gridGap: ".25rem" }}>
            <TextTitleCardEvent>{orderState.eventName}</TextTitleCardEvent>
            <TextTable style={{ textAlign: "left" }}>
              {DateMapper.unixDateToString(orderState.createdAt)}
            </TextTable>
          </div>
          <TextTable style={{ textAlign: "left" }}>Order #{orderState.orderNumber}</TextTable>
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
          <TextTitleCardEvent style={{ textAlign: "left" }}>Total</TextTitleCardEvent>
          <TextTitleCardEvent style={{ textAlign: "right" }}>
            ${orderState.total} MXN
          </TextTitleCardEvent>
        </CardRowHeader>
      </CardContainer>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <GradientButton onClick={saveChanges}>SAVE CHANGES</GradientButton>
      </div>
    </React.Fragment>
  );
};

export const OrderEditContainer = withRouter(OrderEditContainerComponent);
