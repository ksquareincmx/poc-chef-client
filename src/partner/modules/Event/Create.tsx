import * as React from "react";
import {
  Input,
  Form,
  DivMin,
  DivMax,
  Button,
  DivRCMin,
  H4,
  H1,
  DivLeftC,
  DivRightC,
  DivCF,
  DivFG
} from "../ui/Event/EventAddUI";

import moment from "moment-timezone";

export class CreateEvent extends React.Component {
  public state = {
    event: {
      name: "",
      startDate: Number(moment(new Date())),
      endDate: Number(moment(new Date())),
      startHour: "00:00",
      endHour: "00:00",
      tortaPocchuc: 0,
      tortaCamaron: 0
    },
    message: ""
  };

  componentDidMount() {
    console.log("state: ", this.state);
  }

  public handleChange = (e: any) => {
    console.log("state: ", this.state);
    const target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    value =
      (name === "tortaCamaron" || name === "tortaPocchuc") && Number(value)
        ? value
        : name !== "tortaCamaron" && name !== "tortaPocchuc"
        ? value
        : name === "tortaCamaron"
        ? this.state.event.tortaCamaron
        : this.state.event.tortaPocchuc;

    console.log("date: ", value);
    value =
      name === "startDate" || name === "endDate" ? moment(value).unix() : value;
    let event = { event: { [name]: value } };
    event = Object.assign(this.state, event);
    this.setState(event);
    console.log("state: ", this.state);
  };

  private valida = () => {
    if (this.state.event.startDate < Number(moment(new Date()))) {
      return false;
    }
    if (this.state.event.endDate < this.state.event.startDate) return false;
    if (this.state.event.name === "") return false;
    // if (this.state.endHour <= this.state.startHour) return false;
    else return true;
  };

  public createEvent = (e: any) => {
    e.preventDefault();
    if (this.valida) console.log("guardado");
    else console.log("error en validación");
  };

  public render() {
    return (
      <div>
        <Form onSubmit={this.createEvent}>
          <H1>New Event</H1>
          <DivCF>
            <DivMax>
              <p>Event Name:</p>
              <Input
                type="text"
                name="name"
                value={this.state.event.name}
                onChange={this.handleChange}
              />
            </DivMax>

            <DivLeftC>
              <DivFG>
                <p>Start Event:</p>
                <Input
                  type="date"
                  name="startDate"
                  value={moment(this.state.event!.startDate).format(
                    "YYYY-MM-DD"
                  )}
                  onChange={this.handleChange}
                />
              </DivFG>
              <DivFG>
                <p>Start Hour:</p>
                <Input
                  type="time"
                  name="startHour"
                  value={this.state.event!.startHour}
                  onChange={this.handleChange}
                />
              </DivFG>
              <br />
            </DivLeftC>

            <DivRightC>
              <DivFG>
                <p>End Date:</p>
                <Input
                  type="date"
                  name="endDate"
                  value={moment(this.state.event!.endDate).format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                />
              </DivFG>

              <DivFG>
                <p>End Hour:</p>
                <Input
                  type="time"
                  name="endHour"
                  value={this.state.event!.endHour}
                  onChange={this.handleChange}
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
                  type="text"
                  name="tortaPocchuc"
                  value={this.state.event.tortaPocchuc}
                  onChange={this.handleChange}
                />
              </DivMin>

              <DivMin>
                <Input
                  type="text"
                  name="tortaCamaron"
                  value={this.state.event.tortaCamaron}
                  onChange={this.handleChange}
                />
              </DivMin>
            </DivRCMin>
          </DivCF>

          <Button type="submit">Create Event</Button>
        </Form>
      </div>
    );
  }
}
