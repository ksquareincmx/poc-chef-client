import * as React from "react";
import styled from "@emotion/styled";
import styledCComponents from "styled-components";
import { IEvent, event } from "src/partner/models/Event";
import * as utils from "./utils";
import cuid from "cuid";
import { NotificationContext } from "src/providers";
import { any } from "prop-types";

const Input = styled.input({
  borderRadius: "8px 8px 8px 8px",
  border: "1px solid #eee",
  marginBottom: "15px",
  width: "88%",
  height: "40px",
  float: "left",
  padding: "0px 15px",
});

const Form = styled.form({
  borderRadius: "5px",
  maxWidth: "700px",
  width: "100%",
  margin: "5px auto",
  backgroundColor: "#FFFFFF",
  overflow: "hidden",
});

const DivMin = styled.div({
  overflow: "0px 15px hidden",
  clear: "both",
  float: "right",
});
const DivMax = styled.div({
  overflow: "hidden",
  clear: "both",
});

const Button = styled.button({
  backgroundColor: "#81BDA4",
  color: "#FFF",
  textAlign: "center",
  width: "100%",
  padding: "17px 25px",
  borderRadius: "8px 8px 8px 8px",
  cursor: "pointer",
  marginTop: "40px",
  fontSize: "18px",
});

const DivRCMin = styled.div({
  width: "23%",
  float: "right",
  boxSizing: "border-box",
  padding: "0px 20px 0px -15px",
});

const H4 = styled.h4({
  textAlign: "left",
  color: "#666",
  textShadow: "1px 1px 0px #FFF",
  fontFamily: "Arial",
  margin: "40px 0px 0px 0px",
  borderBottom: "1px solid black",
});

const H1 = styled.h1({
  textAlign: "left",
  color: "#666",
  textShadow: "1px 1px 0px #FFF",
  margin: "50px 0px 0px 0px",
  fontFamily: "Arial",
  borderBottom: "1px solid black",
});

const DivLeftC = styled.div({
  width: "49.5%",
  float: "left",
  boxSizing: "border-box",
  padding: "0px 15px 0px 0px",
});

const DivRightC = styled.div({
  width: "49.5%",
  float: "right",
  boxSizing: "border-box",
  padding: "0px 0px 0px 15px",
});

const DivCF = styled.div({
  padding: "5px",
  fontFamily: "Arial",
});

const DivFG = styled.div({
  overflow: "hidden",
  clear: "both",
});

const InputError = styled.p({
  color: "red",
});

export interface ICreateEventProps {
  editEvent?: boolean;
  eventInfo?: IEvent;
  onEdit: (event: any) => void;
  onCreate: (event: any) => void;
  closeModal: () => void;
}

export interface ICreateEventState {
  event: IEvent;
}
export class CreateEvent extends React.Component<ICreateEventProps, ICreateEventState> {
  state = {
    event: event(),
  };

  static contextType = NotificationContext.NotificationContext;

  handleSubmit = (e: any) => {
    e.preventDefault();
    if (this.props.editEvent) {
      this.props.onEdit(this.state.event);
      this.props.closeModal();
      return;
    }
    const event = this.state.event;
    event.id = cuid();
    this.props.onCreate(this.state.event);
  };

  handleChangeName = (e: any) => {
    const name = e.target.value;
    this.setState((prevState: ICreateEventState) => ({
      event: { ...prevState.event, name },
    }));
  };

  handleChangeStartDate = (e: any) => {
    const startDateString = e.target.value;
    const startDate = new Date(`${startDateString}T00:00:00`);

    if (!this.state.event.endDateString) {
      this.setState((prevState: ICreateEventState) => ({
        event: { ...prevState.event, startDate, startDateString },
      }));
      return;
    }

    if (this.state.event.endDate < startDate) {
      this.context.handleShowNotification("The start date must be lower than the end date");
      return;
    }

    this.setState((prevState: ICreateEventState) => ({
      event: { ...prevState.event, startDate, startDateString },
    }));
  };

  handleChangeEndDate = (e: any) => {
    const endDateString = e.target.value;
    const endDate = new Date(`${endDateString}T00:00:00`);
    const startDate = new Date(`${this.state.event.startDateString}T00:00:00`);

    if (!this.state.event.startDateString) {
      this.setState((prevState: ICreateEventState) => ({
        event: { ...prevState.event, endDate, endDateString },
      }));
    }
    if (startDate > endDate) {
      this.context.handleShowNotification("The end date must be higher than the start date");
      return;
    }

    this.setState((prevState: ICreateEventState) => ({
      event: { ...prevState.event, endDate, endDateString },
    }));
  };

  handleChangeStartTime = (e: any) => {
    const startTimeString = e.target.value;

    if (!this.state.event.endTimeString) {
      this.setState((prevState: ICreateEventState) => ({
        event: { ...prevState.event, startTimeString },
      }));
      return;
    }
    const startTime = new Date(`2019-01-01T${startTimeString}:00`);
    const endTime = new Date(`2019-01-01T${this.state.event.endTimeString}:00`);

    if (endTime < startTime) {
      this.context.handleShowNotification("The end time must be higher than the start time");
      return;
    }

    this.setState((prevState: ICreateEventState) => ({
      event: { ...prevState.event, startTimeString },
    }));
  };

  handleChangeEndTime = (e: any) => {
    const endTimeString = e.target.value;

    if (!this.state.event.startTimeString) {
      this.setState((prevState: ICreateEventState) => ({
        event: { ...prevState.event, endTimeString },
      }));
      return;
    }

    const endTime = new Date(`2019-01-01T${endTimeString}:00`);
    const startTime = new Date(`2019-01-01T${this.state.event.endTimeString}:00`);

    if (endTime < startTime) {
      this.context.handleShowNotification("The end time must be higher than the start time");
      return;
    }

    this.setState((prevState: ICreateEventState) => ({
      event: { ...prevState.event, endTimeString },
    }));
  };

  handleChangeTortaPocchuc = (e: any) => {
    const pocChucTortaAmount = e.currentTarget.value;
    const pocChucTotal = pocChucTortaAmount * this.state.event.pocChucTortaUnitPrice;

    const event = {
      ...this.state.event,
      pocChucTortaAmount: pocChucTortaAmount,
      pocChucTotal: pocChucTotal,
    };
    this.setState({ event });
  };

  handleChangeTortaShrimp = (e: any) => {
    const shrimpTortaAmount = e.currentTarget.value;
    const shrimpTotal = shrimpTortaAmount * this.state.event.shrimpTortaUnitPrice;

    const event = {
      ...this.state.event,
      shrimpTortaAmount: shrimpTortaAmount,
      shrimpTotal: shrimpTotal,
    };
    this.setState({ event });
  };

  componentDidMount() {
    if (this.props.editEvent) {
      const eventFormatted = utils.getEventFormat(this.props.eventInfo);
      this.setState({
        event: eventFormatted,
      });
    }
  }
  render() {
    let textButton = "Create Event";
    if (this.props.editEvent) {
      textButton = "Edit Event";
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <DivCF>
            <DivMax>
              <p>Event Name:</p>
              <Input
                type="text"
                name="name"
                value={this.state.event.name}
                onChange={this.handleChangeName}
                required={true}
              />
            </DivMax>

            <DivLeftC>
              <DivFG>
                <p>Start Event:</p>
                <Input
                  type="date"
                  name="startDateString"
                  value={this.state.event.startDateString}
                  onChange={this.handleChangeStartDate}
                  required={true}
                />
              </DivFG>
              <DivFG>
                <p>Start Hour:</p>
                <Input
                  type="time"
                  name="startTimeString"
                  value={this.state.event.startTimeString}
                  onChange={this.handleChangeStartTime}
                  required={true}
                />
              </DivFG>
              <br />
            </DivLeftC>

            <DivRightC>
              <DivFG>
                <p>End Date:</p>
                <Input
                  type="date"
                  name="endDateString"
                  value={this.state.event.endDateString}
                  onChange={this.handleChangeEndDate}
                  required={true}
                />
              </DivFG>

              <DivFG>
                <p>End Hour:</p>
                <Input
                  type="time"
                  name="endTimeString"
                  value={this.state.event.endTimeString}
                  onChange={this.handleChangeEndTime}
                  required={true}
                />
              </DivFG>
            </DivRightC>
          </DivCF>

          <H4>Price</H4>

          <DivCF>
            <DivLeftC>
              <DivFG>
                <br />
                <p>Tortas Poc chuc</p>
              </DivFG>
              <br />
              <DivFG>
                <p>Tortas Camarón </p>
              </DivFG>
            </DivLeftC>

            <DivRCMin>
              <DivMin>
                <Input
                  type="number"
                  name="pocChucTortaAmount"
                  value={this.state.event.pocChucTortaAmount}
                  onChange={this.handleChangeTortaPocchuc}
                  required={true}
                />
              </DivMin>

              <DivMin>
                <Input
                  type="number"
                  name="shrimpTortaAmount"
                  value={this.state.event.shrimpTortaAmount}
                  onChange={this.handleChangeTortaShrimp}
                  required={true}
                />
              </DivMin>
            </DivRCMin>
          </DivCF>

          <Button type="submit">{textButton}</Button>
        </Form>
      </div>
    );
  }
}
