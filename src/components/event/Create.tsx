"use strict";

import * as React from "react";
import styled from "@emotion/styled";

interface IEvent {
  name: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  tortaPocchuc: number;
  tortaCamaron: number;
}

export class CreateEvent extends React.Component {
  public state = {
    event: {}
  };

  public eventName = React.createRef<HTMLInputElement>();
  public startDate = React.createRef<HTMLInputElement>();
  public endDate = React.createRef<HTMLInputElement>();
  public startHour = React.createRef<HTMLInputElement>();
  public endHour = React.createRef<HTMLInputElement>();
  public tortaPocchuc = React.createRef<HTMLInputElement>();
  public tortaCamaron = React.createRef<HTMLInputElement>();

  public createEvent = (e: any) => {
    e.preventDefault();
    const validation =
      !this.eventName ||
      !this.startDate ||
      !this.endDate ||
      !this.startHour ||
      !this.endHour ||
      !this.tortaPocchuc ||
      !this.tortaCamaron
        ? true
        : false;
    if (!validation) {
      const event: IEvent = {
        name: this.eventName.current!.value,
        startDate: this.startDate.current!.value,
        endDate: this.endDate.current!.value,
        startHour: this.startHour.current!.value,
        endHour: this.endHour.current!.value,
        tortaPocchuc: Number(this.tortaPocchuc.current!.value),
        tortaCamaron: Number(this.tortaCamaron.current!.value)
      };
      this.setState(event);
      e.currentTarget.reset();
    } else {
      alert("ño");
    }
  };

  public render() {
    const Input = styled.input({
      position: "relative",
      "& :hover": {
        outline: "none",
        boxShadow: "0.2rem 0.8rem 1.6rem",
        background: "black",
        color: "red"
      }
    });

    return (
      <div>
        <form onSubmit={this.createEvent}>
          <div>
            <label htmlFor="inputName">Event Name:</label>
            <Input ref={this.eventName} type="text" id="inputName" />
          </div>
          <div>
            <label htmlFor="inputName">Start date:</label>
            <Input ref={this.startDate} type="text" id="inputStartDate" />
          </div>
          <div>
            <label htmlFor="inputName">End date:</label>
            <Input ref={this.endDate} type="text" id="inputEndDate" />
          </div>
          <div>
            <label htmlFor="inputName">Start hour:</label>
            <Input ref={this.startHour} type="text" id="inputStartHour" />
          </div>
          <div>
            <label htmlFor="inputName">End hour:</label>
            <Input ref={this.endHour} type="text" id="inputEndHour" />
          </div>
          <div>
            <label htmlFor="inputName">Torta de Poc-chuc:</label>
            <Input ref={this.tortaPocchuc} type="text" id="inputTortaPocchuc" />
          </div>
          <div>
            <label htmlFor="inputName">Torta de Camarón:</label>
            <Input ref={this.tortaCamaron} type="text" id="inputTortaCamaron" />
          </div>
          <button type="submit" />
        </form>
      </div>
    );
  }
}
