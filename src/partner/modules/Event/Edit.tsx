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

export class EditEvent extends React.Component {
  public state = {
    event: {
      name: "",
      startDate: "",
      endDate: "",
      startHour: "",
      endHour: "",
      tortaPocchuc: 0,
      tortaCamaron: 0
    }
  };

  public handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const event = { event: { [name]: value } };

    this.setState(event);
  };

  public createEvent = (e: any) => e.preventDefault();

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
                value={this.state.event!.name}
                onChange={this.handleChange}
              />
            </DivMax>

            <DivLeftC>
              <DivFG>
                <p>Start Event:</p>
                <Input
                  type="date"
                  name="startDate"
                  value={this.state.event!.startDate}
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
                  value={this.state.event!.endDate}
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
                  value={this.state.event!.tortaPocchuc}
                  onChange={this.handleChange}
                />
              </DivMin>

              <DivMin>
                <Input
                  type="text"
                  name="tortaCamaron"
                  value={this.state.event!.tortaCamaron}
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
