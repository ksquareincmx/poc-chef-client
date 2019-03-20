import { fillZeros } from "src/common/utils/utils";

export function unixDateToString(date: number | string) {
  const dateObj = new Date(date);
  let month = fillZeros(dateObj.getMonth() + 1);
  let day = fillZeros(dateObj.getDate());
  let year = dateObj.getFullYear();

  return `${month}/${day}/${year}`;
}
