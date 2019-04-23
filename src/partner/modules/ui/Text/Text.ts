import styles from "styled-components";
import { TextMessage } from "src/common/ui/Text";

export const TextTitleHeader = styles(TextMessage)`
    font-size: .875rem;
    line-height: 1.43;
    color: #fff;
`;

export const TextTitleCardEvent = styles(TextMessage)`
    font-size: .875rem;
    line-height: 1.14;
    color: #515354;
    height: 1rem;
`;

export const TextDescriptionCardEvent = styles(TextMessage)`
    height: 1rem;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #999999;
    text-align: left;
`;

export const TextTableTitleCardEvent = styles(TextMessage)`
    height: 1rem;
    font-size: .75rem;
    line-height: 1.33;  
    color: #515354;
`;

export const TextTableRowCardEvent = styles(TextTableTitleCardEvent)`
    font-weight: normal;
`;

export const TextTableProducts = styles(TextTableTitleCardEvent)`
    font-weight: normal;
`;
export const TextPriceTableProducts = styles(TextTableProducts)`
    color: #969897;
`;
