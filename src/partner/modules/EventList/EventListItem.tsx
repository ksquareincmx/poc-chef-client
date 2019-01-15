import React from "react";
import styled from "@emotion/styled";
import { IEvent } from "../../interfaces/Event";

interface IEventItemProps {
  eventInfo: IEvent;
}

const EventContainer = styled.div({
  boxShadow: "-2px 2px 10px #bdbdbd",
  background: "white",
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px"
});

const H1 = styled.h1({
  margin: "0",
  fontFamily: "unset",
  fontSize: "16px",
  fontStyle: "bold"
});

const H2 = {
  margin: "0",
  fontFamily: "unset",
  fontSize: "12px",
  fontStyle: "bold",
  width: "100%"
};

const H2Left = styled.h2({
  ...H2,
  textAlign: "left"
});

const H2Center = styled.h2({
  ...H2,
  textAlign: "center"
});

const H2Right = styled.h2({
  ...H2,
  textAlign: "right"
});

const RowDataContainer = {
  width: "100%",
  padding: "5px 20px"
};
const RowDataContainerBordeBottom = styled.div({
  ...RowDataContainer,
  borderBottom: "2px solid #f3f3f3"
});

const RowDataContainerBorderLess = styled.div({
  ...RowDataContainer
});

const TableContainer = styled.table({
  width: "100%",
  padding: "5px 20px"
});
const TableHead = styled.thead({
  width: "100%",
  padding: "5px 20px",
  borderBottom: "2px solid #f3f3f3"
});

const TableFoot = styled.tfoot({
  width: "100%",
  padding: "5px 20px",
  borderTop: "2px solid #f3f3f3"
});

const RowData = styled.div({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between"
});

const EventRowItem = {
  margin: "0",
  padding: "0",
  fontFamily: "unset",
  fontSize: "12px",
  fontStyle: "bold",
  justifyContent: "space-between"
};

const EventRowItemLeft = styled.p({
  ...EventRowItem,
  textAlign: "left"
});

const EventRowItemCenter = styled.p({
  ...EventRowItem,
  textAlign: "center"
});

const EventRowItemRight = styled.p({
  ...EventRowItem,
  textAlign: "right"
});

const EventListItem: React.SFC<IEventItemProps> = props => {
  return (
    <EventContainer key={props.eventInfo.id}>
      <RowDataContainerBordeBottom>
        <H1>{props.eventInfo.orderNumber}</H1>
      </RowDataContainerBordeBottom>
      <RowDataContainerBordeBottom>
        <H2Left>{props.eventInfo.name}</H2Left>
        <RowData>
          <EventRowItemLeft>
            {`${props.eventInfo.startDateString} - ${
              props.eventInfo.endDateString
            }`}
          </EventRowItemLeft>
          <EventRowItemRight>
            {`${props.eventInfo.starTimeString} - ${
              props.eventInfo.endTimeString
            }`}
          </EventRowItemRight>
        </RowData>
      </RowDataContainerBordeBottom>
      <RowDataContainerBorderLess>
        <TableContainer>
          <TableHead>
            <tr>
              <th>
                <H2Left>Tortas</H2Left>
              </th>
              <th>
                <H2Center>Price</H2Center>
              </th>
              <th>
                <H2Center>Units</H2Center>
              </th>
              <th>
                <H2Right>Amount</H2Right>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>
                <EventRowItemLeft>Tortas de Poc Chuc</EventRowItemLeft>
              </td>
              <td>
                <EventRowItemCenter>{`$${
                  props.eventInfo.pocChucTortaUnitPrice
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemCenter>{`${
                  props.eventInfo.pocChucTortaAmount
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemRight>
                  {`$${props.eventInfo.pocChucTotal}`}
                </EventRowItemRight>
              </td>
            </tr>
            <tr>
              <td>
                <EventRowItemLeft>Tortas de Camarón</EventRowItemLeft>
              </td>
              <td>
                <EventRowItemCenter>{`$${
                  props.eventInfo.shrimpTortaUnitPrice
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemCenter>{`${
                  props.eventInfo.shrimpTortaAmount
                }`}</EventRowItemCenter>
              </td>
              <td>
                <EventRowItemRight>
                  {`$${props.eventInfo.shrimpTotal}`}
                </EventRowItemRight>
              </td>
            </tr>
          </tbody>
          <TableFoot>
            <tr>
              <td>
                <H2Left>Total</H2Left>
              </td>
              <td />
              <td />
              <td>
                <EventRowItemRight>
                  {`$${props.eventInfo.total}`}
                </EventRowItemRight>
              </td>
            </tr>
          </TableFoot>
        </TableContainer>
      </RowDataContainerBorderLess>
    </EventContainer>
  );
};

export default EventListItem;
