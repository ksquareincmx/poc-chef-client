import React from "react";
import { IEvent } from "../../interfaces/Event";

interface IEventListProps {
  events: IEvent[];
}

const styles = {
  eventsContainer: {
    marginTop: "-25px",
    padding: "0 15px 0 15px",
    height: "100%"
  },
  eventContainer: {
    boxShadow: "-2px 2px 10px #bdbdbd",
    background: "white",
    width: "100%",
    borderRadius: "5px",
    marginBottom: "10px"
  },
  h1: {
    margin: "0",
    fontFamily: "unset",
    fontSize: "16px",
    fontStyle: "bold"
  },
  h2: {
    margin: "0",
    fontFamily: "unset",
    fontSize: "12px",
    fontStyle: "bold"
  },
  rowDataContainer: {
    width: "100%",
    padding: "5px 20px",
    borderBottom: "2px solid #f3f3f3"
  },
  rowData: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between"
  },
  eventRowItem: {
    margin: "0",
    padding: "0",
    fontFamily: "unset",
    fontSize: "12px",
    fontStyle: "bold"
  },
  rowTitles: {
    display: "flex",
    justifyContent: "space-between"
  },
  table: {
    item: {
      leftAlign: {},
      middleAlign: {
        textAlign: "center"
      },
      rightAlign: {
        textAlign: "right"
      }
    }
  }
};

const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <div className="events-container" style={styles.eventsContainer}>
      {props.events.map(e => {
        return (
          <div
            className="event-container"
            style={styles.eventContainer}
            key={e.id}
          >
            <div
              className="event-number-id-row row-data-container"
              style={styles.rowDataContainer}
            >
              <h1 className="event-number" style={styles.h1}>
                Event #12
              </h1>
            </div>
            <div
              className="event-data row-data-container"
              style={styles.rowDataContainer}
            >
              <h2 className="event-data-name" style={styles.h2}>
                Tortas para la oficina
              </h2>
              <div className="event-row-data" style={styles.rowData}>
                <p
                  className="event-date event-row-item"
                  style={styles.eventRowItem}
                >
                  27/07/2018
                </p>
                <p
                  className="event-time event-row-item"
                  style={styles.eventRowItem}
                >
                  5:00 PM - 12:00 AM
                </p>
              </div>
            </div>
            <div
              className="event-orders-list row-data-container"
              style={styles.rowDataContainer}
            >
              <table style={styles.rowDataContainer}>
                <thead style={styles.rowDataContainer}>
                  <tr>
                    <th>
                      <h2 style={{ ...styles.h2, textAlign: "left" }}>
                        Tortas
                      </h2>
                    </th>
                    <th>
                      <h2 style={{ ...styles.h2, textAlign: "center" }}>
                        Price
                      </h2>
                    </th>
                    <th>
                      <h2 style={{ ...styles.h2, textAlign: "center" }}>
                        Units
                      </h2>
                    </th>
                    <th>
                      <h2 style={{ ...styles.h2, textAlign: "right" }}>
                        Amount
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "left" }}>
                      Tortas de Poc Chuc
                    </p>
                  </td>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "center" }}>
                      $25
                    </p>
                  </td>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "center" }}>
                      30
                    </p>
                  </td>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "right" }}>
                      $750
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "left" }}>
                      Tortas de Camarón
                    </p>
                  </td>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "center" }}>
                      $30
                    </p>
                  </td>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "center" }}>
                      10
                    </p>
                  </td>
                  <td>
                    <p style={{ ...styles.eventRowItem, textAlign: "right" }}>
                      $300
                    </p>
                  </td>
                </tr>
              </table>
              <div className="event-row-data" style={styles.rowData}>
                <h2 style={styles.h2}>Total</h2>
                <p style={styles.eventRowItem}> $1050</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
