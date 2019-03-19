export function fillZeros(cant: number, cantMax = 2) {
  return cant.toString().padStart(cantMax, "0");
}

export function numberDecimals(cant: number, decimals = 2) {
  return cant.toFixed(decimals);
}
