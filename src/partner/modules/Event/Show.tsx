import * as React from "react";
import {
  P,
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

interface IEventProps {
  name: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  tortaPocchuc: number;
  tortaCamaron: number;
}

interface IProps {
  event: IEventProps;
}

export const ShowEvent: React.SFC<IProps> = props => {
  return (
    <div>
      <H1>New Event</H1>
      <DivCF>
        <DivMax>
          <p>Event Name:</p>
          <P> {props.event.name} </P>
        </DivMax>

        <DivLeftC>
          <DivFG>
            <p>Start Event:</p>
            <P> {props.event.startDate} </P>
          </DivFG>
          <DivFG>
            <p>Start Hour:</p>
            <P> {props.event.startHour} </P>
          </DivFG>
          <br />
        </DivLeftC>

        <DivRightC>
          <DivFG>
            <p>End Date:</p>
            <P> {props.event.endDate} </P>
          </DivFG>

          <DivFG>
            <p>End Hour:</p>
            <P> {props.event.endHour} </P>
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
            <P> {props.event.tortaPocchuc} </P>
          </DivMin>

          <DivMin>
            <P> {props.event.tortaCamaron} </P>
          </DivMin>
        </DivRCMin>
      </DivCF>
    </div>
  );
};
