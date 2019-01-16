"use strict";

import * as React from "react";
import { Input } from "./";

import { IEventEntity } from "./../../interfaces/";

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
      const event: IEventEntity = {
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
    return (
      <div>
        <form onSubmit={this.createEvent}>
          <div>
            <label htmlFor="inputName">Event Name:</label>
            <Input reference={this.eventName} datatype="text" id="inputName" />
          </div>
          <div>
            <label htmlFor="inputName">Start date:</label>
            <Input
              reference={this.startDate}
              datatype="text"
              id="inputStartDate"
            />
          </div>
          <div>
            <label htmlFor="inputName">End date:</label>
            <Input reference={this.endDate} datatype="text" id="inputEndDate" />
          </div>
          <div>
            <label htmlFor="inputName">Start hour:</label>
            <Input
              reference={this.startHour}
              datatype="text"
              id="inputStartHour"
            />
          </div>
          <div>
            <label htmlFor="inputName">End hour:</label>
            <Input reference={this.endHour} datatype="text" id="inputEndHour" />
          </div>
          <div>
            <label htmlFor="inputName">Torta de Poc-chuc:</label>
            <Input
              reference={this.tortaPocchuc}
              datatype="text"
              id="inputTortaPocchuc"
            />
          </div>
          <div>
            <label htmlFor="inputName">Torta de Camarón:</label>
            <Input
              reference={this.tortaCamaron}
              datatype="text"
              id="inputTortaCamaron"
            />
          </div>
          <button type="submit" />
        </form>
      </div>
    );
  }
}
