import React from "react";
import { Link } from "react-router-dom";
import { ListStyled } from "src/partner/modules/ui";
import { IEvent } from "src/partner/models/Event";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { CreateEvent } from "src/components/event/Create";

export interface IEventItemProps {
  eventInfo: IEvent;
  eventView?: boolean;
}

interface IEventItemState {
  showMenu?: boolean;
  editEvent: boolean;
}

export class EventListItem extends React.Component<
  IEventItemProps,
  IEventItemState
> {
  state = {
    showMenu: false,
    editEvent: false
  };

  render() {
    const props = this.props;
    return (
      <ListStyled.ListItem key={props.eventInfo.id}>
        <ListStyled.ListItemRow borderBottom>
          <ListStyled.RowData>
            <ListStyled.H1 align="left">
              {props.eventInfo.orderNumber}
            </ListStyled.H1>
            {!props.eventView && (
              <ListStyled.MenuOptions
                onClick={e => this.setState({ showMenu: !this.state.showMenu })}
              >
                <ListStyled.ImgMenu
                  src={require("../../../images/menu-icon.png")}
                  alt="options"
                />
                <ListStyled.MenuOptionsContent show={this.state.showMenu}>
                  <Link to={"events/" + props.eventInfo.id}>View Event</Link>
                  <a onClick={() => this.setState({ editEvent: true })}>
                    Edit Event
                  </a>
                </ListStyled.MenuOptionsContent>
              </ListStyled.MenuOptions>
            )}
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
        <Modal
          title="Edit Event"
          show={this.state.editEvent}
          closeModal={() => this.setState({ editEvent: false })}
        >
          <CreateEvent />
        </Modal>
      </ListStyled.ListItem>
    );
  }
}
