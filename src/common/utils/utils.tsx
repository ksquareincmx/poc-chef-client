export function unixDateToString(date: number | string) {
  const dateObj = new Date(date);
  let month = fillZeros(dateObj.getMonth() + 1);
  let day = fillZeros(dateObj.getDate());
  let year = dateObj.getFullYear();

  return `${month}/${day}/${year}`;
}

export function fillZeros(cant: number, cantMax = 2) {
  return cant.toString().padStart(cantMax, "0");
}

export function numberDecimals(cant: number, decimals = 2) {
  return cant.toFixed(decimals);
}
