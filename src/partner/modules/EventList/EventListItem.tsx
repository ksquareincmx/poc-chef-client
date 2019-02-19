import React from "react";
import { ListStyled } from "../ui";
import { IEvent } from "../../models/Event";
import { Link } from "react-router-dom";

interface IEventItemProps {
  eventInfo: IEvent;
  eventView?: boolean;
}

const EventListItem: React.SFC<IEventItemProps> = props => {
  return (
    <ListStyled.ListItem key={props.eventInfo.id}>
      <ListStyled.ListItemRow borderBottom>
        <ListStyled.RowData>
          <ListStyled.H1 align="left">
            {(!props.eventView && (
              <Link to={"events/" + props.eventInfo.id}>
                {props.eventInfo.orderNumber}
              </Link>
            )) ||
              props.eventInfo.orderNumber}
          </ListStyled.H1>
          <ListStyled.ImgMenu
            src={require("../../../images/menu-icon.png")}
            alt="options"
          />
        </ListStyled.RowData>
      </ListStyled.ListItemRow>
      <ListStyled.ListItemRow borderBottom>
        <ListStyled.H2 align="left">{props.eventInfo.name}</ListStyled.H2>
        <ListStyled.RowData>
          <ListStyled.P align="left">
            {`${props.eventInfo.startDateString} - ${
              props.eventInfo.endDateString
            }`}
          </ListStyled.P>
          <ListStyled.P align="right">
            {`${props.eventInfo.starTimeString} - ${
              props.eventInfo.endTimeString
            }`}
          </ListStyled.P>
        </ListStyled.RowData>
      </ListStyled.ListItemRow>
      <ListStyled.Table>
        <thead>
          <tr>
            <th>
              <ListStyled.H2 align="left">Tortas</ListStyled.H2>
            </th>
            <th>
              <ListStyled.H2 align="center">Price</ListStyled.H2>
            </th>
            <th>
              <ListStyled.H2 align="center">Units</ListStyled.H2>
            </th>
            <th>
              <ListStyled.H2 align="right">Amount</ListStyled.H2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ListStyled.P align="left">Tortas de Poc Chuc</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="center">{`$${
                props.eventInfo.pocChucTortaUnitPrice
              }`}</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="center">{`${
                props.eventInfo.pocChucTortaAmount
              }`}</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="right">{`$${
                props.eventInfo.pocChucTotal
              }`}</ListStyled.P>
            </td>
          </tr>
          <tr>
            <td>
              <ListStyled.P align="left">Tortas de Camarón</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="center">{`$${
                props.eventInfo.shrimpTortaUnitPrice
              }`}</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="center">{`${
                props.eventInfo.shrimpTortaAmount
              }`}</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="right">{`$${
                props.eventInfo.shrimpTotal
              }`}</ListStyled.P>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <ListStyled.H2 align="left">Total</ListStyled.H2>
            </td>
            <td />
            <td />
            <td>
              <ListStyled.P align="right">{`$${
                props.eventInfo.total
              }`}</ListStyled.P>
            </td>
          </tr>
        </tfoot>
      </ListStyled.Table>
    </ListStyled.ListItem>
  );
};
EventListItem.defaultProps = { eventView: false };
export { EventListItem };
