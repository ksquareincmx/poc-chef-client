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

interface IPropsData {
  match: { params: { update: string } };
}

export class CreateEvent extends React.Component<IPropsData> {
  public state = {
    // event: {
    name: "",
    startDate: Number(moment(new Date())),
    endDate: Number(moment(new Date())),
    startHour: "00:00",
    endHour: "00:00",
    tortaPocchuc: 0,
    tortaCamaron: 0,
    // },
    message: ""
  };

  componentDidMount() {
    console.log("initial state: ", this.state);
    this.data();
  }

  data() {
    console.log("data", this.props.match.params.update);
    if (this.props.match.params.update) {
      console.log("entro");
      const state = {
        name: "Algo para actualizar",
        startDate: Number(moment(new Date())),
        endDate: Number(moment(new Date())),
        startHour: "14:00",
        endHour: "20:00",
        tortaPocchuc: 100,
        tortaCamaron: 100,
        message: ""
      };
      this.setState(state);
    }
  }

  public handleChange = (e: any) => {
    const state = Object.assign({}, this.state);
    const target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    value =
      (name === "tortaCamaron" || name === "tortaPocchuc") && Number(value)
        ? value
        : name !== "tortaCamaron" && name !== "tortaPocchuc"
        ? value
        : name === "tortaCamaron"
        ? this.state.tortaCamaron
        : this.state.tortaPocchuc;
    value =
      name === "startDate" || name === "endDate" ? moment(value).unix() : value;
    let event = { [name]: value };
    event = Object.assign(state, event);
    this.setState(event, () => console.log("this: ", this.state));
  };

  private valida = () => {
    if (this.state.startDate < Number(moment(new Date()))) {
      console.log("1");
      const state = Object.assign(this.state, {
        message: "La fecha final debe ser posterior al día de hoy"
      });
      this.setState(state);
      return false;
    } else if (this.state.endDate < this.state.startDate) {
      console.log("2");
      const state = Object.assign(this.state, {
        message: "La fecha final debe ser posterior a la inicial"
      });
      this.setState(state);
      return false;
    } else if (this.state.name === "") {
      console.log("El campo nombre no ha sido llenado");
      const state = Object.assign(this.state, {
        message: "El campo nombre no ha sido llenado"
      });
      this.setState(state);
      return false;
    }
    // else if (this.state.endHour <= this.state.startHour) return false;
    else return true;
  };

  public createEvent = (e: any) => {
    e.preventDefault();
    if (this.valida()) {
      console.log("guardado");
      if (this.props.match) console.log("actualiza");
      else console.log("graba");
    } else console.log("error en validación");
    console.log("final state: ", this.state);
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
                value={this.state.name}
                onChange={this.handleChange}
              />
            </DivMax>

            <DivLeftC>
              <DivFG>
                <p>Start Event:</p>
                <Input
                  type="date"
                  name="startDate"
                  value={moment(this.state.startDate).format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                />
              </DivFG>
              <DivFG>
                <p>Start Hour:</p>
                <Input
                  type="time"
                  name="startHour"
                  value={this.state.startHour}
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
                  value={moment(this.state.endDate).format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                />
              </DivFG>

              <DivFG>
                <p>End Hour:</p>
                <Input
                  type="time"
                  name="endHour"
                  value={this.state.endHour}
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
                  value={this.state.tortaPocchuc}
                  onChange={this.handleChange}
                />
              </DivMin>

              <DivMin>
                <Input
                  type="text"
                  name="tortaCamaron"
                  value={this.state.tortaCamaron}
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
