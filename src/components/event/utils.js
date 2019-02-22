export const getEventFormat = event => {
  console.log(event);
  const startTime =
    addZeros(event.startDate.getHours()) + ":" + addZeros(event.startDate.getMinutes());

  const endTime = addZeros(event.endDate.getHours()) + ":" + addZeros(event.endDate.getMinutes());

  const startDate =
    addZeros(event.startDate.getFullYear()) +
    "-" +
    addZeros(event.startDate.getMonth() + 1) +
    "-" +
    addZeros(event.startDate.getDate());

  const endDate =
    addZeros(event.endDate.getFullYear()) +
    "-" +
    addZeros(event.endDate.getMonth() + 1) +
    "-" +
    addZeros(event.endDate.getDate());

  return {
    name: event.name,
    startDate: startDate,
    endDate: endDate,
    startHour: startTime,
    endHour: endTime,
    tortaPocchuc: event.pocChucTortaAmount,
    tortaCamaron: event.shrimpTortaAmount,
  };
};

export const addZeros = num => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};
