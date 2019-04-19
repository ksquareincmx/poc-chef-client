import styles from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styles.div`
    width: 21.435rem;
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
    padding: .5rem 1rem 0.46875rem 1rem;
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

export const CardIconImg = styles.img({
  width: "1rem",
  height: "1rem",
});

export const CardLinkIcon = styles(Link)`
  height: 16px;
`;
