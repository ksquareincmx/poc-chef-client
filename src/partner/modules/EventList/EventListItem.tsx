import React from "react";
import { Link } from "react-router-dom";
import { IEvent } from "src/partner/models/Event";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { Notification } from "src/partner/modules/ui/Modal/Notification";
import { CreateEvent } from "src/components/event/Create";
import styledComponents from "styled-components";
import { ListStyled } from "src/partner/modules/ui";
import { NotificationContext } from "src/providers";

export interface IEventItemProps {
  eventInfo: IEvent;
  eventView?: boolean;
}

export interface IEventItemState {
  showMenu?: boolean;
  editEvent: boolean;
  cancelEvent: boolean;
}

export class EventListItem extends React.Component<IEventItemProps, IEventItemState> {
  state = {
    showMenu: false,
    editEvent: false,
    cancelEvent: false
  };

  static contextType = NotificationContext.NotificationContext;

  handleCancelEvent = () => {
    // TODO: Make a request to delete the event
    // TODO: Identify this is a past event
    this.context.handleShowNotification("Event deleted");
    this.setState({ cancelEvent: false });
  };

  showMenuOptions = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  showModalEditEvent = () => {
    this.setState({ editEvent: !this.state.editEvent });
  };

  showModalCancelEvent = () => {
    this.setState({ cancelEvent: true });
  };

  closeModalCancelEvent = () => {
    this.setState({ cancelEvent: false });
  };

  render() {
    const props = this.props;
    return (
      <ListStyled.ListItem key={props.eventInfo.id}>
        <ListStyled.ListItemRow borderBottom>
          <ListStyled.RowData>
            <ListStyled.H1 align="left">{props.eventInfo.orderNumber}</ListStyled.H1>
            {!props.eventView && (
              <ListStyled.MenuOptions onClick={this.showMenuOptions}>
                <ListStyled.ImgMenu src={require("../../../images/menu-icon.png")} alt="options" />
                <ListStyled.MenuOptionsContent show={this.state.showMenu}>
                  <Link to={"events/" + props.eventInfo.id}>View Event</Link>
                  <a onClick={this.showModalEditEvent}>Edit Event</a>
                  <a onClick={this.showModalCancelEvent}>Cancel Event</a>
                </ListStyled.MenuOptionsContent>
              </ListStyled.MenuOptions>
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
              {`${props.eventInfo.starTimeString} - ${props.eventInfo.endTimeString}`}
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
        <Modal title="Edit Event" show={this.state.editEvent} closeModal={this.showModalEditEvent}>
          <CreateEvent editEvent={true} eventInfo={this.props.eventInfo} />
        </Modal>
        <Modal
          title="Cancel Event"
          show={this.state.cancelEvent}
          closeModal={this.closeModalCancelEvent}
        >
          <ListStyled.H2>Are you sure you want to cancel this event?</ListStyled.H2>
          <ListStyled.RowData>
            <ListStyled.GradientButton onClick={this.handleCancelEvent}>
              Confirm
            </ListStyled.GradientButton>
          </ListStyled.RowData>
        </Modal>
      </ListStyled.ListItem>
    );
  }
}
