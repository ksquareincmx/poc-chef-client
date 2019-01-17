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
      borderRadius: "8px 8px 8px 8px",
      border: "1px solid #eee",
      marginBottom: "15px",
      width: "88%",
      height: "40px",
      float: "left",
      padding: "0px 15px"
    });

    const Form = styled.form({
      borderRadius: "5px",
      maxWidth:"700px",
      width:"100%",
      margin: "5% auto",
      backgroundColor: "#FFFFFF",
      overflow: "hidden"
    })

    const DivMin = styled.div({
      overflow: "0px 15px hidden",
      clear: "both",
      float: "right"
    })
    const DivMax = styled.div({
      overflow: "hidden",
      clear: "both"
    })

    const Button = styled.button({
      backgroundColor: "#81BDA4",
      color: "#FFF",
      textAlign: "center",
      width: "100%",
      padding: "17px 25px",
      borderRadius: "8px 8px 8px 8px",
      cursor: "pointer",
      marginTop: "40px",
      fontSize: "18px"
    })

    const DivRCMin = styled.div({
      width:"23%",
      float:"right",
      boxSizing: "border-box",
      padding: "0px 20px 0px -15px"
    })

    const H4 = styled.h4({
      textAlign: "left",
      color: "#666",
      textShadow: "1px 1px 0px #FFF",
      fontFamily: "Arial",
      margin:"40px 0px 0px 0px",
      borderBottom: "1px solid black"
    })

    const H1 = styled.h1({
      textAlign:"left",
      color: "#666",
      textShadow: "1px 1px 0px #FFF",
      margin:"50px 0px 0px 0px",
      fontFamily: "Arial",
      borderBottom: "1px solid black"
    })

    const DivLeftC = styled.div({
      width:"49.5%",
      float:"left",
      boxSizing: "border-box",
      padding: "0px 15px 0px 0px"
    })

    const DivRightC = styled.div({
      width:"49.5%",
      float:"right",
      boxSizing: "border-box",
      padding: "0px 0px 0px 15px"
    })

    const DivCF = styled.div({
      padding: "40px 30px",
      fontFamily: "Arial"
    })

    const DivFG = styled.div({
      overflow: "hidden",
      clear: "both"
    })

    return (
      <div>
        <Form onSubmit={this.createEvent}>
          <H1>New Event</H1>
          <DivCF>
            <DivMax>
              <p>Event Name:</p>
              <Input type="text" ref={this.eventName} />
            </DivMax>

            <DivLeftC>

              <DivFG>
                <p>Start Event:</p>
                <Input type="date" ref={this.startDate}  />
              </DivFG>
              <DivFG>
                <p>Start Hour:</p>
                <Input type="date" ref={this.startHour} />
              </DivFG>
              <br />

            </DivLeftC>

            <DivRightC>

              <DivFG>
                <p>End Date:</p>
                <Input type="date" ref={this.endDate} />
              </DivFG>

              <DivFG>
                <p>End Hour:</p>
                <Input type="date" ref={this.endHour} />
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
                <Input type="text" ref={this.tortaPocchuc} />
              </DivMin>

              <DivMin>
                <Input type="text" ref={this.tortaCamaron} />
              </DivMin>
            </DivRCMin>
          </DivCF>

          <Button type="submit">Create Event</Button>

        </Form>

      </div>
    );
  }
}
