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

export const TextTitleCardEvent = styles(TextMessage)`
    font-size: 14px;
    line-height: 1.14;
    color: #515354;
    height:16px;
`;

export const TextDescriptionCardEvent = styles(TextMessage)`
    height: 16px;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #999999;
    text-align: left;
`;

export const TextTableTitleCardEvent = styles(TextMessage)`
    height: 16px;
    font-size: 12px;
    line-height: 1.33;
    color: #515354;
`;

export const TextTableRowCardEvent = styles(TextTableTitleCardEvent)`
    font-weight: normal;
`;
