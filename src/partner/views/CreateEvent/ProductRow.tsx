import React, { ChangeEvent } from "react";
import styles from "styled-components";
import { CardRow } from "src/partner/modules/ui";
import { InputLabel } from "src/partner/modules/InputLabel";

const CustomRow = styles(CardRow)`
    padding: 0px;
    border: none;
`;

interface IProductRowProps {
  uuid: string;
  descriptionValue: string;
  descriptionOnChange: (uuid: string, ev: ChangeEvent<HTMLInputElement>) => void;
  amountValue: string;
  amountOnchange: (uuid: string, ev: ChangeEvent<HTMLInputElement>) => void;
}

export const ProductRow: React.SFC<IProductRowProps> = ({
  uuid,
  descriptionValue,
  descriptionOnChange,
  amountValue,
  amountOnchange,
}) => {
  return (
    <CustomRow key={uuid}>
      <InputLabel
        width="9.1875rem"
        label="Description"
        inputAttrs={{
          name: "description",
          value: descriptionValue,
          onChange: descriptionOnChange.bind(null, uuid),
        }}
      />
      <InputLabel
        width="7rem"
        label="Amount"
        inputAttrs={{
          name: "amount",
          value: amountValue,
          onChange: amountOnchange.bind(null, uuid),
        }}
      />
    </CustomRow>
  );
};
