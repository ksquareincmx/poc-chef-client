import React, { useState, useContext, useEffect } from "react";
import { CardContainer, CardRowHeader } from "src/common/ui/Card";
import { GradientButton } from "src/common/ui/Buttons";
import { TextTable, TextTitleCardEvent, TextTableTitleCardEvent } from "src/common/ui/Text";
import { ProductsListContainer } from "src/user/modules/ProductsEditListContainer";
import { DateMapper } from "src/common/mappers/";
import { CustomProductRow } from "../ui/ProductEditRow";
import { IUserEvent } from "src/user/models/UserEvent";
import styled from "styled-components";
import styledTS from "styled-components-ts";
import { OrderService } from "src/user/services/OrderService";
import { NotificationContext } from "src/providers";
import { withRouter, RouteComponentProps } from "react-router";
import { USER_MY_ORDERS_ROUTE } from "src/user/routes";

interface ICustomTextTableTitleCardEvent {
  align?: string;
}
const CustomTextTableTitleCardEvent = styledTS<ICustomTextTableTitleCardEvent>(
  styled(TextTableTitleCardEvent),
)` text-align: ${({ align }) => align || "left"};`;

interface IEventProps {
  event: IUserEvent;
}

const EventCardComponent: React.FC<IEventProps & RouteComponentProps> = ({ event, history }) => {
  const [state, setState] = useState<IUserEvent>(event);
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const handleAddUnit = (idProduct: string) => {
    const dataProduct = { ...state.products[idProduct] };
    dataProduct.quantity += 1;
    dataProduct.subtotal = dataProduct.quantity * dataProduct.price;
    setState({ ...state, products: { ...state.products, [idProduct]: { ...dataProduct } } });
  };

  const handleMinusUnit = (idProduct: string) => {
    const dataProduct = { ...state.products[idProduct] };

    if (dataProduct.quantity === 0) {
      return;
    }

    dataProduct.quantity -= 1;
    dataProduct.subtotal = dataProduct.quantity * dataProduct.price;
    setState({ ...state, products: { ...state.products, [idProduct]: { ...dataProduct } } });
  };

  const handleRemoveProduct = (idProduct: string) => {
    //handleRemoveProduct
  };

  const getErrors = () => {
    const errors = [];
    const noProductsAdded = Object.keys(state.products).every(
      a => state.products[a].quantity === 0,
    );
    if (noProductsAdded) {
      errors.push("Add at least one product");
    }
    return errors;
  };

  const saveChanges = async () => {
    try {
      const errors = getErrors();
      if (errors.length > 0) {
        throw new Error(errors.join(", "));
      }

      const data = await OrderService.postOrder(state);

      if (data.id) {
        history.push(USER_MY_ORDERS_ROUTE);
      }
    } catch (err) {
      notificationContext.handleShowNotification(err.message);
    }
  };

  const handleOnChangeInput = (idProduct: string) => {
    //handle onChange product or not?
  };

  useEffect(
    function updateOrderTotal() {
      const total = Object.keys(state.products).reduce((a, b) => a + state.products[b].subtotal, 0);
      setState({ ...state, total });
    },
    [state.products],
  );

  return (
    <React.Fragment>
      <CardContainer>
        <CardRowHeader style={{ padding: ".5rem 1rem .475rem 1rem" }}>
          <div style={{ display: "grid", gridGap: ".25rem" }}>
            <TextTitleCardEvent align="left">{state.name}</TextTitleCardEvent>
            <TextTable align="left">
              {DateMapper.unixDateToString(state.expirationDate.getTime())}
            </TextTable>
          </div>
        </CardRowHeader>
        <CustomProductRow>
          <CustomTextTableTitleCardEvent>Product</CustomTextTableTitleCardEvent>
          <CustomTextTableTitleCardEvent align="right">Price</CustomTextTableTitleCardEvent>
          <span />
        </CustomProductRow>
        <ProductsListContainer
          products={state.products}
          handleAddUnit={handleAddUnit}
          handleMinusUnit={handleMinusUnit}
          handleRemoveProduct={handleRemoveProduct}
          handleOnChangeInput={handleOnChangeInput}
        />
        <div style={{ textAlign: "center", padding: ".5rem 0px" }}>
          <GradientButton
            style={{
              width: "auto",
              padding: "0px 1rem",
              backgroundImage: state.total == 0 ? "none" : "",
              backgroundColor: state.total == 0 ? "#b3b3b3" : "",
            }}
            onClick={saveChanges}
          >
            SUBMIT HAPPINESS
          </GradientButton>
        </div>
      </CardContainer>
    </React.Fragment>
  );
};

export const EventCard = withRouter(EventCardComponent);
