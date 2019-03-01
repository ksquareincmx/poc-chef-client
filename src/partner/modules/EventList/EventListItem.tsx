import React from "react";
import { Link } from "react-router-dom";
import { ListStyled } from "src/partner/modules/ui";
import { IEvent } from "src/partner/models/Event";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { CreateEvent } from "src/components/event/Create";
import { EventOrdersContainer } from "./EventOrdersContainer";

export interface IEventItemProps {
  eventInfo: IEvent;
  eventView?: boolean;
  handleCancelEvent: (e: any) => void;
  onEdit: (event: any) => void;
  modalController?: any;
}

interface IEventItemState {
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

  handleCancelEvent = () => {
    this.props.handleCancelEvent(this.props.eventInfo.id);
    this.setState({ cancelEvent: false });
  };

  showMenuOptions = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  showModal = () => {
    this.setState({ editEvent: true });
  };

  closeModal = () => {
    this.setState({ editEvent: false });
  };

  showMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  showModalCancelEvent = () => {
    this.props.modalController.showModalCancelEvent(this.props.eventInfo);
  };

  closeModalCancelEvent = () => {
    this.setState({ cancelEvent: false });
  };

  handleEditEvent = () => {
    this.props.modalController.showEditModal(this.props.eventInfo);
  };

  render() {
    const props = this.props;
    return (
      <ListStyled.ListItem key={props.eventInfo.id}>
        <ListStyled.ListItemRow borderBottom>
          <ListStyled.RowData>
            <ListStyled.H1 align="left">{props.eventInfo.orderNumber}</ListStyled.H1>
            {!props.eventView && (
              <ListStyled.MenuOptions onClick={this.showMenu}>
                <ListStyled.ImgMenu src={require("../../../images/menu-icon.png")} alt="options" />
                <ListStyled.MenuOptionsContent show={this.state.showMenu}>
                  <Link to={"events/" + props.eventInfo.id}>View Event</Link>
                  <a onClick={this.handleEditEvent}>Edit Event</a>
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
        {this.props.eventView && <EventOrdersContainer eventId={props.eventInfo.id} />}
      </ListStyled.ListItem>
    );
  }
}
