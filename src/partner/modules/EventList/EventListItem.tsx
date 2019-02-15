import React from "react";
import {
  ListItem,
  H1,
  ImgMenu,
  H2,
  ListItemRow,
  Table,
  RowData,
  P
} from "../ui/List/List";
import { IEvent } from "../../interfaces/Event";
import { Link } from "react-router-dom";

interface IEventItemProps {
  eventInfo: IEvent;
  eventView?: boolean;
}

const EventListItem: React.SFC<IEventItemProps> = props => {
  return (
    <ListItem key={props.eventInfo.id}>
      <ListItemRow borderBottom>
        <RowData>
          <H1 align="left">
            {(!props.eventView && (
              <Link to={"events/" + props.eventInfo.id}>
                {props.eventInfo.orderNumber}
              </Link>
            )) ||
              props.eventInfo.orderNumber}
          </H1>
          <ImgMenu
            src={require("../../../images/menu-icon.png")}
            alt="options"
          />
        </RowData>
      </ListItemRow>
      <ListItemRow borderBottom>
        <H2 align="left">{props.eventInfo.name}</H2>
        <RowData>
          <P align="left">
            {`${props.eventInfo.startDateString} - ${
              props.eventInfo.endDateString
            }`}
          </P>
          <P align="right">
            {`${props.eventInfo.starTimeString} - ${
              props.eventInfo.endTimeString
            }`}
          </P>
        </RowData>
      </ListItemRow>
      <Table>
        <thead>
          <tr>
            <th>
              <H2 align="left">Tortas</H2>
            </th>
            <th>
              <H2 align="center">Price</H2>
            </th>
            <th>
              <H2 align="center">Units</H2>
            </th>
            <th>
              <H2 align="right">Amount</H2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <P align="left">Tortas de Poc Chuc</P>
            </td>
            <td>
              <P align="center">{`$${
                props.eventInfo.pocChucTortaUnitPrice
              }`}</P>
            </td>
            <td>
              <P align="center">{`${props.eventInfo.pocChucTortaAmount}`}</P>
            </td>
            <td>
              <P align="right">{`$${props.eventInfo.pocChucTotal}`}</P>
            </td>
          </tr>
          <tr>
            <td>
              <P align="left">Tortas de Camarón</P>
            </td>
            <td>
              <P align="center">{`$${props.eventInfo.shrimpTortaUnitPrice}`}</P>
            </td>
            <td>
              <P align="center">{`${props.eventInfo.shrimpTortaAmount}`}</P>
            </td>
            <td>
              <P align="right">{`$${props.eventInfo.shrimpTotal}`}</P>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <H2 align="left">Total</H2>
            </td>
            <td />
            <td />
            <td>
              <P align="right">{`$${props.eventInfo.total}`}</P>
            </td>
          </tr>
        </tfoot>
      </Table>
    </ListItem>
  );
};
EventListItem.defaultProps = { eventView: false };
export default EventListItem;
