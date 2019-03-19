import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListStyled } from "src/partner/modules/ui";
import { IEvent } from "src/partner/models/Event";
import { EventOrdersContainer } from "./EventOrdersContainer";
import { MenuOptions } from "src/common/ui/MenuOptions/";

export interface IEventItemProps {
  eventInfo: IEvent;
  eventView?: boolean;
  handleCancelEvent: (e: any) => void;
  onEdit: (event: any) => void;
  modalController?: any;
}

export const EventListItem: React.SFC<IEventItemProps> = props => {
  const showModalCancelEvent = () => {
    props.modalController.showModalCancelEvent(props.eventInfo);
  };

  const handleEditEvent = () => {
    props.modalController.showEditModal(props.eventInfo);
  };

  return (
    <ListStyled.ListItem key={props.eventInfo.id}>
      <ListStyled.ListItemRow borderBottom>
        <ListStyled.RowData>
          <ListStyled.H1 align="left">{props.eventInfo.orderNumber}</ListStyled.H1>
          {!props.eventView && (
            <MenuOptions>
              <Link to={`events/${props.eventInfo.id}`}>View Event</Link>
              <a onClick={handleEditEvent}>Edit Event</a>
              <a onClick={showModalCancelEvent}>Cancel Event</a>
            </MenuOptions>
          )}
        </ListStyled.RowData>
      </ListStyled.ListItemRow>
      <ListStyled.ListItemRow borderBottom>
        <ListStyled.H2 align="left">{props.eventInfo.name}</ListStyled.H2>
        <ListStyled.RowData>
          <ListStyled.P align="left">
            {`${props.eventInfo.startDateString} - ${props.eventInfo.endDateString}`}
          </ListStyled.P>
          <ListStyled.P align="right">
            {`${props.eventInfo.startTimeString} - ${props.eventInfo.endTimeString}`}
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
              <ListStyled.P align="center">{`${props.eventInfo.pocChucTortaAmount}`}</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="right">{`$${props.eventInfo.pocChucTotal}`}</ListStyled.P>
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
              <ListStyled.P align="center">{`${props.eventInfo.shrimpTortaAmount}`}</ListStyled.P>
            </td>
            <td>
              <ListStyled.P align="right">{`$${props.eventInfo.shrimpTotal}`}</ListStyled.P>
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
              <ListStyled.P align="right">{`$${props.eventInfo.total}`}</ListStyled.P>
            </td>
          </tr>
        </tfoot>
      </ListStyled.Table>
      {props.eventView && <EventOrdersContainer eventId={props.eventInfo.id} />}
    </ListStyled.ListItem>
  );
};
