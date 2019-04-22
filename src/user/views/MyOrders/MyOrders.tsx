import React, { useReducer, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { OrderListContainer } from "src/user/modules/OrderList";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { ListStyled } from "src/partner/modules/ui";
import reducerMyOrders, {
  initialState,
  openCancelOrderModal,
  closeCancelOrderModal,
  getUser,
} from "src/user/ducks/myOrders";

export const MyOrders: React.SFC = () => {
  const [state, dispatch] = useReducer(reducerMyOrders, initialState);

  useEffect(() => {
    getUser(dispatch);
  }, []);

  const handleCancelEventModalClose = () => {
    dispatch(closeCancelOrderModal());
  };

  const handleCancelOrderModalOpen = (orderId: string) => {
    dispatch(openCancelOrderModal(orderId));
  };

  const handleCancelOrder = () => {
    dispatch(closeCancelOrderModal());
  };

  return (
    <div>
      <Header title="My Orders" />
      <OrderListContainer
        userId={state.user.id}
        onCancelOrderModalOpen={handleCancelOrderModalOpen}
      />
      <Modal
        title="Cancel Order"
        show={state.openModalCancelEvent}
        closeModal={handleCancelEventModalClose}
      >
        <ListStyled.ModalText>Are you sure you want to cancel this Order?</ListStyled.ModalText>
        <ListStyled.RowData>
          <ListStyled.GradientButton onClick={handleCancelOrder}>Confirm</ListStyled.GradientButton>
        </ListStyled.RowData>
      </Modal>
    </div>
  );
};
