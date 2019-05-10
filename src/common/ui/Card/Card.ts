import styles from "styled-components";
import stylesTS from "styled-components-ts";
import { Link } from "react-router-dom";

export const CardContainer = styles.div`
    min-width: 21.435rem;
    width: calc(100% - 2rem);
    margin: 0px auto;
    background-color: #fff;
    border-radius: .25rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    & > div:not(:last-child) {
      border-bottom: 1px solid #f2f2f2;
    }
`;

export const CardRowHeader = styles.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .222rem 1rem 0.1875rem 1rem;
`;

export const CardTextHeaderContainer = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1.5rem;
`;

export const CardRow = styles(CardRowHeader)`
    padding: .46875rem 1rem;
`;

export const CardDescription = styles.div`
    display: grid;
    grid-gap: .25rem;
    padding: 0.46875rem 1rem 0.46875rem 1rem;
`;

export const CardDivActionsContainer = styles.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

interface IimgProps {
  width?: string;
  height?: string;
  margin?: string;
}

export const CardIconImg = stylesTS<IimgProps>(styles.img)`
  width: ${({ width }) => width || "1rem"};
  height: ${({ height }) => height || "1rem"};
  margin: ${({ margin }) => margin || "0px"};
`;

interface ICardLinkIcon {
  height?: string;
  to: string;
}

export const CardLinkIcon = stylesTS<ICardLinkIcon>(styles(Link))`
  height: ${({ height }) => height || "1rem"};
`;

export const CardOrderSection = styles.div`
    padding: 0.46875rem .5rem .25rem 1rem;
`;

export const RowProducts = styles.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
