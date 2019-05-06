import moment from "moment";

export function unixDateToString(unixDate: number) {
  return moment.unix(unixDate).format("MM/DD/YYYY");
}
