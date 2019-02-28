import React from "react";
import { IEvent } from "src/partner/models";
import { IOrderEntity } from "src/partner/models/Order";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import orders from "src/interfaces/orders";
import { IProduct } from "src/partner/models/Order";

export interface IListContainerProps {
  orders: IOrderEntity[];
}

const OrdersTableTr = styledComponents.div`
    display: grid;
    text-align: center;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
    padding: 12px 16px;
    border-top: 2px solid #f3f3f3;
`;
const P = styledComponents.p`
  margin:0;
`;

export const OrdersList: React.SFC<IListContainerProps> = props => {
  const getListProductsPerField = (products: IProduct[], field: string) => {
    return products.map(product => <div key={product.name}>{product[field]}</div>);
  };

  const getBodyOrders = (orders: IOrderEntity[]) => {
    return orders.map(({ id, products, total }) => {
      return (
        <OrdersTableTr key={id}>
          <div>
            <input type="checkbox" name={`check_${id}`} />
          </div>
          <div>
            <P>Person</P>
          </div>
          <div>{getListProductsPerField(products, "name")}</div>
          <div>{getListProductsPerField(products, "quantity")}</div>
          <div>
            <P>{total}</P>
          </div>
        </OrdersTableTr>
      );
    });
  };
  return (
    <>
      <OrdersTableTr>
        <div>
          <input type="checkbox" name="check_all" />
        </div>
        <div>Name</div>
        <div>Tortas</div>
        <div>Units</div>
        <div>Amounts</div>
      </OrdersTableTr>
      {getBodyOrders(props.orders)}
    </>
  );
};
