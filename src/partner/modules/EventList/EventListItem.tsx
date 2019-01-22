import React from "react";
import { CardContainer } from "../ui/Commons/Commons";
import {
  H1,
  ImgMenu,
  H2,
  RowDataContainer,
  Table,
  RowData,
  EventRowItem
} from "../ui/EventList/EventListUI";
import { IEvent } from "../../interfaces/Event";

interface IEventItemProps {
  eventInfo: IEvent;
}

const EventListItem: React.SFC<IEventItemProps> = props => {
  return (
    <CardContainer key={props.eventInfo.id}>
      <RowDataContainer padding="5px 20px">
        <RowData>
          <H1 textAlign="left" margin="-5px 0 0 0">
            {props.eventInfo.orderNumber}
          </H1>
          <ImgMenu
            src={require("../../../images/menu-icon.png")}
            alt="options"
          />
        </RowData>
      </RowDataContainer>
      <RowDataContainer>
        <H2 textAlign="left">{props.eventInfo.name}</H2>
        <RowData>
          <EventRowItem textAlign="left">
            {`${props.eventInfo.startDateString} - ${
              props.eventInfo.endDateString
            }`}
          </EventRowItem>
          <EventRowItem textAlign="right">
            {`${props.eventInfo.starTimeString} - ${
              props.eventInfo.endTimeString
            }`}
          </EventRowItem>
        </RowData>
      </RowDataContainer>
      <Table>
        <thead>
          <tr>
            <th>
              <H2 textAlign="left">Tortas</H2>
            </th>
            <th>
              <H2 textAlign="center">Price</H2>
            </th>
            <th>
              <H2 textAlign="center">Units</H2>
            </th>
            <th>
              <H2 textAlign="right">Amount</H2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <EventRowItem textAlign="left">Tortas de Poc Chuc</EventRowItem>
            </td>
            <td>
              <EventRowItem textAlign="center">{`$${
                props.eventInfo.pocChucTortaUnitPrice
              }`}</EventRowItem>
            </td>
            <td>
              <EventRowItem textAlign="center">{`${
                props.eventInfo.pocChucTortaAmount
              }`}</EventRowItem>
            </td>
            <td>
              <EventRowItem textAlign="right">
                {`$${props.eventInfo.pocChucTotal}`}
              </EventRowItem>
            </td>
          </tr>
          <tr>
            <td>
              <EventRowItem textAlign="left">Tortas de Camarón</EventRowItem>
            </td>
            <td>
              <EventRowItem textAlign="center">{`$${
                props.eventInfo.shrimpTortaUnitPrice
              }`}</EventRowItem>
            </td>
            <td>
              <EventRowItem textAlign="center">{`${
                props.eventInfo.shrimpTortaAmount
              }`}</EventRowItem>
            </td>
            <td>
              <EventRowItem textAlign="right">
                {`$${props.eventInfo.shrimpTotal}`}
              </EventRowItem>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <H2 textAlign="left">Total</H2>
            </td>
            <td />
            <td />
            <td>
              <EventRowItem textAlign="right">
                {`$${props.eventInfo.total}`}
              </EventRowItem>
            </td>
          </tr>
        </tfoot>
      </Table>
    </CardContainer>
  );
};

export default EventListItem;
