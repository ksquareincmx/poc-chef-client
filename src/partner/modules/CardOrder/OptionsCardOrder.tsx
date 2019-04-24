import React, { useState } from "react";
import { CardIconImg } from "src/common/ui/Card";
import { ArrowOptionsIconImg } from "./CardOrder";
import styles from "styled-components";
import { TextPriceTableProducts } from "../ui/Text";

const FloatDivOption = styles.div`
    position: absolute;
    text-align: right;
    right: -.5rem;
    top: .4rem;
    border-radius: .25rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: #fff;
    padding: .125rem .725rem .25rem .725rem
`;

const TextPaid = styles(TextPriceTableProducts)`
    color: #808080;
`;
export interface IOptionsCardOrder {
  paid: boolean;
  onClick: () => void;
}

export const OptionsCardOrder: React.FC<IOptionsCardOrder> = ({ paid, onClick }) => {
  const [showOptions, setShowOptions] = useState(false);
  const iconShow = paid ? "check" : "remove";
  const iconHide = !paid ? "check" : "remove";

  const iconArrowOptions = showOptions ? "up" : "down";
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <CardIconImg
          src={require(`src/images/icons/outline-${iconShow}_circle_outline-24px.svg`)}
        />
        <ArrowOptionsIconImg
          onClick={() => setShowOptions(!showOptions)}
          src={require(`src/images/icons/outline-arrow_drop_${iconArrowOptions}-24px.svg`)}
        />
      </div>
      {showOptions && (
        <div style={{ position: "relative" }}>
          <FloatDivOption onClick={onClick}>
            <TextPaid>
              <CardIconImg
                style={{ marginRight: ".25rem", position: "relative", bottom: "-.125rem" }}
                src={require(`src/images/icons/outline-${iconHide}_circle_outline-24px.svg`)}
              />
              {paid ? "Unpaid" : "Paid"}
            </TextPaid>
          </FloatDivOption>
        </div>
      )}
    </div>
  );
};
