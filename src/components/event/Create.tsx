"use strict";

import * as React from "react";
import styled from "@emotion/styled";

export class CreateEvent extends React.Component {

  public state = {
    event: {
      name: '',
      startDate:'',
      endDate:'',
      startHour:'',
      endHour:'',
      tortaPocchuc:0,
      tortaCamaron:0
    }
  };

  public handleChange = (e:any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({event:{[name]: value}});
  }

  public createEvent = (e: any) => e.preventDefault();

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
              <Input type="text" name="name" value={this.state.event!.name} onChange={this.handleChange} />
            </DivMax>

            <DivLeftC>

              <DivFG>
                <p>Start Event:</p>
                <Input type="date" name="startDate" value={this.state.event!.startDate} onChange={this.handleChange}  />
              </DivFG>
              <DivFG>
                <p>Start Hour:</p>
                <Input type="time" name="startHour" value={this.state.event!.startHour} onChange={this.handleChange} />
              </DivFG>
              <br />

            </DivLeftC>

            <DivRightC>

              <DivFG>
                <p>End Date:</p>
                <Input type="date" name="endDate" value={this.state.event!.endDate} onChange={this.handleChange} />
              </DivFG>

              <DivFG>
                <p>End Hour:</p>
                <Input type="time" name="endHour" value={this.state.event!.endHour} onChange={this.handleChange} />
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
                <Input type="text" name="tortaPocchuc" value={this.state.event!.tortaPocchuc} onChange={this.handleChange} />
              </DivMin>

              <DivMin>
                <Input type="text" name="tortaCamaron" value={this.state.event!.tortaCamaron} onChange={this.handleChange}/>
              </DivMin>
            </DivRCMin>
          </DivCF>

          <Button type="submit">Create Event</Button>

        </Form>

      </div>
    );
  }
}
