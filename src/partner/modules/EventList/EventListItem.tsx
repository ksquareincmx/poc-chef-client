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

const H2 = styled.h2({
  margin: "0",
  fontFamily: "unset",
  fontSize: "12px",
  fontStyle: "bold",
  width: "100%"
});

const RowDataContainer = styled.div({
  width: "100%",
  padding: "5px 20px",
  borderBottom: "2px solid #f3f3f3"
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

const EventRowItem = styled.p({
  margin: "0",
  padding: "0",
  fontFamily: "unset",
  fontSize: "12px",
  fontStyle: "bold",
  justifyContent: "space-between"
});

const styles = {
  // eventContainer: ,
  // h1: ,
  // H2: ,
  // rowDataContainer: ,
  // rowData:,
  // eventRowItem: {,
  rowTitles: {
    display: "flex",
    justifyContent: "space-between"
  }
};

const EventListItem: React.SFC<IEventItemProps> = props => {
  return (
    <EventContainer key={props.eventInfo.id}>
      <RowDataContainer>
        <H1>Event #12</H1>
      </RowDataContainer>
      <RowDataContainer>
        <H2>Tortas para la oficina</H2>
        <RowData>
          <EventRowItem>27/07/2018</EventRowItem>
          <EventRowItem>5:00 PM - 12:00 AM</EventRowItem>
        </RowData>
      </RowDataContainer>
      <RowDataContainer style={{ borderBottom: "0 none" }}>
        <TableContainer>
          <TableHead>
            <tr>
              <th>
                <H2 style={{ textAlign: "left" }}>Tortas</H2>
              </th>
              <th>
                <H2 style={{ textAlign: "center" }}>Price</H2>
              </th>
              <th>
                <H2 style={{ textAlign: "center" }}>Units</H2>
              </th>
              <th>
                <H2 style={{ textAlign: "right" }}>Amount</H2>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>
                <EventRowItem style={{ textAlign: "left" }}>
                  Tortas de Poc Chuc
                </EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>$25</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>30</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "right" }}>$750</EventRowItem>
              </td>
            </tr>
            <tr>
              <td>
                <EventRowItem style={{ textAlign: "left" }}>
                  Tortas de Camarón
                </EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>$30</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>10</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "right" }}>$300</EventRowItem>
              </td>
            </tr>
          </tbody>
          <TableFoot>
            <tr>
              <td>
                <H2 style={{ textAlign: "left" }}>Total</H2>
              </td>
              <td />
              <td />
              <td>
                <EventRowItem style={{ textAlign: "right" }}>
                  $1050
                </EventRowItem>
              </td>
            </tr>
          </TableFoot>
        </TableContainer>
      </RowDataContainer>
    </EventContainer>
  );
};

{
  /* 
          <TableHead>
            <tr>
              <th>
                <H2 style={{ textAlign: "left" }}>Tortas</H2>
              </th>
              <th>
                <H2 style={{ textAlign: "center" }}>Price</H2>
              </th>
              <th>
                <H2 style={{ textAlign: "center" }}>Units</H2>
              </th>
              <th>
                <H2 style={{ textAlign: "right" }}>Amount</H2>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>
                <EventRowItem style={{ textAlign: "left" }}>
                  Tortas de Poc Chuc
                </EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>$25</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>30</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "right" }}>$750</EventRowItem>
              </td>
            </tr>
            <tr>
              <td>
                <EventRowItem style={{ textAlign: "left" }}>
                  Tortas de Camarón
                </EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>$30</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "center" }}>10</EventRowItem>
              </td>
              <td>
                <EventRowItem style={{ textAlign: "right" }}>$300</EventRowItem>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <H2 style={{ textAlign: "left" }}>Total</H2>
              </td>
              <td />
              <td />
              <td>
                <EventRowItem style={{ textAlign: "right" }}>
                  $1050
                </EventRowItem>
              </td>
            </tr>
          </tfoot>
        */
}
export default EventListItem;
