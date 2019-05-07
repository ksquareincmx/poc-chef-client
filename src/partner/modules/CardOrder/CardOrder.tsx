import React, { useState } from "react";
import {
  CardContainer,
  CardRowHeader,
  CardIconImg,
  CardOrderSection,
  RowProducts,
  CardTextHeaderContainer,
} from "src/common/ui/Card";
import { TextTableTitleCardEvent, TextTable } from "src/common/ui/Text";
import styles from "styled-components";
import { ProductsOrderContainer } from "./ProductsOrderContainer";
import { OptionsCardOrder } from "./OptionsCardOrder";
import { IOrder } from "src/partner/models";

const TextCreatedBy = styles(TextTableTitleCardEvent)`
  color: #969897;
  text-align: left;
`;

const ArrowIconImg = styles(CardIconImg)`
    position: relative;
    top: .25rem;
`;

export const ArrowOptionsIconImg = styles(ArrowIconImg)`
    margin-left: 1rem;
`;

interface ICardOrderProps {
  order: IOrder.IOrder;
  updateStatusPaidOrder: () => void;
}

export const CardOrder: React.FC<ICardOrderProps> = ({ order, updateStatusPaidOrder }) => {
  const [showProductList, setShowProductList] = useState(false);
  const iconArrowProductList = showProductList ? "up" : "down";

  return (
    <CardContainer>
      <CardRowHeader>
        <CardTextHeaderContainer>
          <TextTableTitleCardEvent>Order</TextTableTitleCardEvent>
        </CardTextHeaderContainer>
        <CardTextHeaderContainer>
          <TextTableTitleCardEvent>Status</TextTableTitleCardEvent>
        </CardTextHeaderContainer>
      </CardRowHeader>
      <CardOrderSection>
        <TextCreatedBy>{order.userName}</TextCreatedBy>
        <RowProducts>
          <TextTable style={{ textAlign: "left" }}>Total order</TextTable>
          <TextTable style={{ textAlign: "right" }}>
            ${order.total} MXN
            <ArrowIconImg
              onClick={() => setShowProductList(!showProductList)}
              src={require(`src/images/icons/outline-arrow_drop_${iconArrowProductList}-24px.svg`)}
            />
          </TextTable>
          <OptionsCardOrder paid={order.paid} onClick={updateStatusPaidOrder} />
        </RowProducts>
      </CardOrderSection>
      {showProductList && <ProductsOrderContainer products={order.products} />}
    </CardContainer>
  );
};
