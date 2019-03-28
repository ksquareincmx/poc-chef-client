import React from "react";
import { IOrder } from "src/partner/models/Order";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { IProduct } from "src/partner/models/Order";

export interface IOrderTableTr {
  backgroundGray?: boolean;
}

const OrdersTableTr = styledComponentsTS<IOrderTableTr>(styledComponents.div)`
    display: grid;
    text-align: center;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
    padding: 12px 16px;
    border-top: 1px solid #e6e6e6;
    background-color: ${({ backgroundGray }) => (backgroundGray ? "#f2f2f2" : "#fff")};
`;

const P = styledComponents.p`
  margin:0;
`;

const OrderListContainer = styledComponents.div`
  max-height: 150px;
  overflow-y: auto;
  font-size: 12px;
`;

const CellDiv = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface IOrderListProps {
  orders: IOrder[];
  handleCheckAll: (checked: boolean) => void;
  handleCheckOrder: (orderId: string, e: any) => void;
  checkAll: boolean;
}

export const OrdersList: React.SFC<IOrderListProps> = props => {
  const getListProductsPerField = (products: IProduct[], field: string) => {
    return products.map(product => <div key={product.name}>{product[field]}</div>);
  };

  const getOrderTr = ({ id, products, total, checked }: IOrder) => {
    return (
      <OrdersTableTr key={id} backgroundGray={checked}>
        <CellDiv>
          <input
            type="checkbox"
            name={`check_${id}`}
            checked={checked}
            onChange={(e: any) => props.handleCheckOrder(id, e)}
          />
        </CellDiv>
        <CellDiv>
          <P>Person</P>
        </CellDiv>
        <div>{getListProductsPerField(products, "name")}</div>
        <div>{getListProductsPerField(products, "quantity")}</div>
        <CellDiv>
          <P>{total}</P>
        </CellDiv>
      </OrdersTableTr>
    );
  };

  return (
    <>
      <OrdersTableTr>
        <div>
          <input
            type="checkbox"
            name="check_all"
            checked={props.checkAll}
            onChange={(e: any) => props.handleCheckAll(e.currentTarget.checked)}
          />
        </div>
        <div>Name</div>
        <div>Tortas</div>
        <div>Units</div>
        <div>Amounts</div>
      </OrdersTableTr>
      <OrderListContainer>{props.orders.map(getOrderTr)}</OrderListContainer>
    </>
  );
};
