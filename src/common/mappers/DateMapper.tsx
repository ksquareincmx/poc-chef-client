import moment from "moment";

export function unixDateToString(unixDate: number) {
  const isTimeValue = `${unixDate}`.length === 13;
  if (isTimeValue) {
    return moment(unixDate).format("MM/DD/YYYY");
  }
  return moment.unix(unixDate).format("MM/DD/YYYY");
}
