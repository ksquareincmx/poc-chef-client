import * as React from "react";
import styled from "@emotion/styled";
import { IEvent, event } from "src/partner/models/Event";
import * as utils from "./utils";
import cuid from "cuid";
import { NotificationContext } from "src/providers";

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
  maxWidth: "700px",
  width: "100%",
  margin: "5px auto",
  backgroundColor: "#FFFFFF",
  overflow: "hidden"
});

const DivMin = styled.div({
  overflow: "0px 15px hidden",
  clear: "both",
  float: "right"
});
const DivMax = styled.div({
  overflow: "hidden",
  clear: "both"
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
  fontSize: "18px"
});

const DivRCMin = styled.div({
  width: "23%",
  float: "right",
  boxSizing: "border-box",
  padding: "0px 20px 0px -15px"
});

const H4 = styled.h4({
  textAlign: "left",
  color: "#666",
  textShadow: "1px 1px 0px #FFF",
  fontFamily: "Arial",
  margin: "40px 0px 0px 0px",
  borderBottom: "1px solid black"
});

const H1 = styled.h1({
  textAlign: "left",
  color: "#666",
  textShadow: "1px 1px 0px #FFF",
  margin: "50px 0px 0px 0px",
  fontFamily: "Arial",
  borderBottom: "1px solid black"
});

const DivLeftC = styled.div({
  width: "49.5%",
  float: "left",
  boxSizing: "border-box",
  padding: "0px 15px 0px 0px"
});

const DivRightC = styled.div({
  width: "49.5%",
  float: "right",
  boxSizing: "border-box",
  padding: "0px 0px 0px 15px"
});

const DivCF = styled.div({
  padding: "5px",
  fontFamily: "Arial"
});

const DivFG = styled.div({
  overflow: "hidden",
  clear: "both"
});

const InputError = styled.p({
  color: "red"
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
export const CreateEvent: React.FC<ICreateEventProps> = props => {
  const [eventItem, setEvent] = React.useState<IEvent>(event());

  const context = React.useContext(NotificationContext.NotificationContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (props.editEvent) {
      props.onEdit(eventItem);
      props.closeModal();
      return;
    }
    const event = eventItem;
    event.id = cuid();
    props.onCreate(eventItem);
  };

  const handleChangeName = (e: any) => {
    const name = e.target.value;
    setEvent({ ...eventItem, name });
  };

  const handleChangeStartDate = (e: any) => {
    const startDateString = e.target.value;
    const startDate = new Date(`${startDateString}T00:00:00`).getTime();

    if (!eventItem.endDateString) {
      return setEvent({ ...eventItem, startDate, startDateString });
    }

    if (eventItem.endDate < startDate) {
      return context.handleShowNotification("The start date must be lower than the end date");
    }

    setEvent({ ...eventItem, startDate, startDateString });
  };

  const handleChangeEndDate = (e: any) => {
    const endDateString = e.target.value;
    const endDate = new Date(`${endDateString}T00:00:00`).getTime();
    const startDate = new Date(`${eventItem.startDateString}T00:00:00`).getTime();

    if (!eventItem.startDateString) {
      setEvent({ ...eventItem, endDate, endDateString });
    }
    if (startDate > endDate) {
      return context.handleShowNotification("The end date must be higher than the start date");
    }
    setEvent({ ...eventItem, endDate, endDateString });
  };

  const handleChangeStartTime = (e: any) => {
    const startTimeString = e.target.value;

    if (!eventItem.endTimeString) {
      return setEvent({ ...eventItem, startTimeString });
    }
    const startTime = new Date(`2019-01-01T${startTimeString}:00`).getTime();
    const endTime = new Date(`2019-01-01T${eventItem.endTimeString}:00`).getTime();

    if (endTime < startTime) {
      return context.handleShowNotification("The end time must be higher than the start time");
    }

    setEvent({ ...eventItem, startTimeString });
  };

  const handleChangeEndTime = (e: any) => {
    const endTimeString = e.target.value;

    if (!eventItem.startTimeString) {
      return setEvent({ ...eventItem, endTimeString });
    }

    const endTime = new Date(`2019-01-01T${endTimeString}:00`).getTime();
    const startTime = new Date(`2019-01-01T${eventItem.endTimeString}:00`).getTime();

    if (endTime < startTime) {
      return context.handleShowNotification("The end time must be higher than the start time");
    }

    setEvent({ ...eventItem, endTimeString });
  };

  const handleChangeTortaPocchuc = (e: any) => {
    const pocChucTortaAmount = e.currentTarget.value;
    const pocChucTotal = pocChucTortaAmount * eventItem.pocChucTortaUnitPrice;

    const newEvent = {
      ...eventItem,
      pocChucTortaAmount: pocChucTortaAmount,
      pocChucTotal: pocChucTotal
    };
    setEvent(newEvent);
  };

  const handleChangeTortaShrimp = (e: any) => {
    const shrimpTortaAmount = e.currentTarget.value;
    const shrimpTotal = shrimpTortaAmount * eventItem.shrimpTortaUnitPrice;

    const newEvent = {
      ...eventItem,
      shrimpTortaAmount: shrimpTortaAmount,
      shrimpTotal: shrimpTotal
    };
    setEvent(newEvent);
  };

  React.useEffect(() => {
    if (props.editEvent) {
      const eventFormatted = utils.getEventFormat(props.eventInfo);
      setEvent(eventFormatted);
    }
  }, []);

  let textButton = "Create Event";
  if (props.editEvent) {
    textButton = "Edit Event";
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <DivCF>
          <DivMax>
            <p>Event Name:</p>
            <Input
              type="text"
              name="name"
              value={eventItem.name}
              onChange={handleChangeName}
              required={true}
            />
          </DivMax>

          <DivLeftC>
            <DivFG>
              <p>Start Event:</p>
              <Input
                type="date"
                name="startDateString"
                value={eventItem.startDateString}
                onChange={handleChangeStartDate}
                required={true}
              />
            </DivFG>
            <DivFG>
              <p>Start Hour:</p>
              <Input
                type="time"
                name="startTimeString"
                value={eventItem.startTimeString}
                onChange={handleChangeStartTime}
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
                value={eventItem.endDateString}
                onChange={handleChangeEndDate}
                required={true}
              />
            </DivFG>

            <DivFG>
              <p>End Hour:</p>
              <Input
                type="time"
                name="endTimeString"
                value={eventItem.endTimeString}
                onChange={handleChangeEndTime}
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
                value={eventItem.pocChucTortaAmount}
                onChange={handleChangeTortaPocchuc}
                required={true}
              />
            </DivMin>

            <DivMin>
              <Input
                type="number"
                name="shrimpTortaAmount"
                value={eventItem.shrimpTortaAmount}
                onChange={handleChangeTortaShrimp}
                required={true}
              />
            </DivMin>
          </DivRCMin>
        </DivCF>

        <Button type="submit">{textButton}</Button>
      </Form>
    </div>
  );
};
