import styles from "styled-components";

export const TextMessage = styles.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #999999;
    margin:0px;
`;

export const TextTitleHeader = styles(TextMessage)`
    font-size: 14px;
    line-height: 1.43;
    color: #fff;
`;
