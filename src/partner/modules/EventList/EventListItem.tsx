import React from "react";
import {
  EventContainer,
  H1,
  H2Left,
  H2Center,
  H2Right,
  RowDataContainerBordeBottom,
  RowDataContainerBorderLess,
  TableContainer,
  TableHead,
  TableFoot,
  RowData,
  EventRowItemLeft,
  EventRowItemCenter,
  EventRowItemRight
} from "../ui/EventList/EventListUI";
import { IEvent } from "../../interfaces/Event";

interface IEventItemProps {
  eventInfo: IEvent;
}

const EventListItem: React.SFC<IEventItemProps> = props => {
  return (
    <EventContainer key={props.eventInfo.id}>
      <RowDataContainerBordeBottom>
        <H1>{props.eventInfo.orderNumber}</H1>
      </RowDataContainerBordeBottom>
      <RowDataContainerBordeBottom>
        <H2Left>{props.eventInfo.name}</H2Left>
        <RowData>
          <EventRowItemLeft>
            {`${props.eventInfo.startDateString} - ${
              props.eventInfo.endDateString
            }`}
          </EventRowItemLeft>
          <EventRowItemRight>
            {`${props.eventInfo.starTimeString} - ${
              props.eventInfo.endTimeString
            }`}
          </EventRowItemRight>
        </RowData>
      </RowDataContainerBordeBottom>
      <RowDataContainerBorderLess>
        <TableContainer>
          <TableHead>
            <tr>
              <th>
                <H2Left>Tortas</H2Left>
              </th>
              <th>
                <H2Center>Price</H2Center>
              </th>
              <th>
                <H2Center>Units</H2Center>
              </th>
              <th>
                <H2Right>Amount</H2Right>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>
                <EventRowItemLeft>Tortas de Poc Chuc</EventRowItemLeft>
              </td>
              <td>
                <EventRowItemCenter>{`$${
                  props.eventInfo.pocChucTortaUnitPrice
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemCenter>{`${
                  props.eventInfo.pocChucTortaAmount
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemRight>
                  {`$${props.eventInfo.pocChucTotal}`}
                </EventRowItemRight>
              </td>
            </tr>
            <tr>
              <td>
                <EventRowItemLeft>Tortas de Camarón</EventRowItemLeft>
              </td>
              <td>
                <EventRowItemCenter>{`$${
                  props.eventInfo.shrimpTortaUnitPrice
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemCenter>{`${
                  props.eventInfo.shrimpTortaAmount
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemRight>
                  {`$${props.eventInfo.shrimpTotal}`}
                </EventRowItemRight>
              </td>
            </tr>
          </tbody>
          <TableFoot>
            <tr>
              <td>
                <H2Left>Total</H2Left>
              </td>
              <td />
              <td />
              <td>
                <EventRowItemRight>
                  {`$${props.eventInfo.total}`}
                </EventRowItemRight>
              </td>
            </tr>
          </TableFoot>
        </TableContainer>
      </RowDataContainerBorderLess>
    </EventContainer>
  );
};

export default EventListItem;
