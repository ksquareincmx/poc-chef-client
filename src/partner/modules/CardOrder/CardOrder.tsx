import React, { useState } from "react";
import { CardContainer, CardRowHeader, CardIconImg, CardOrderSection, RowProducts } from "../ui";
import { TextTableTitleCardEvent, TextTableProducts } from "../ui/Text";
import styles from "styled-components";
import { ProductsOrderContainer } from "./ProductsOrderContainer";
import { OptionsCardOrder } from "./OptionsCardOrder";

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
  order: any; //temporal,
  updateStatusPaidOrder: () => void;
}

export const CardOrder: React.FC<ICardOrderProps> = ({ order, updateStatusPaidOrder }) => {
  const [showProductList, setShowProductList] = useState(false);
  const iconArrowProductList = showProductList ? "up" : "down";

  return (
    <CardContainer>
      <CardRowHeader>
        <TextTableTitleCardEvent>Order</TextTableTitleCardEvent>
        <TextTableTitleCardEvent>Status</TextTableTitleCardEvent>
      </CardRowHeader>
      <CardOrderSection>
        <TextCreatedBy>{order.orderedBy}</TextCreatedBy>
        <RowProducts>
          <TextTableProducts style={{ textAlign: "left" }}>Total order</TextTableProducts>
          <TextTableProducts style={{ textAlign: "right" }}>
            ${order.total} MXN
            <ArrowIconImg
              onClick={() => setShowProductList(!showProductList)}
              src={require(`src/images/icons/outline-arrow_drop_${iconArrowProductList}-24px.svg`)}
            />
          </TextTableProducts>
          <OptionsCardOrder paid={order.paid} onClick={updateStatusPaidOrder} />
        </RowProducts>
      </CardOrderSection>
      {showProductList && <ProductsOrderContainer products={order.products} />}
    </CardContainer>
  );
};
