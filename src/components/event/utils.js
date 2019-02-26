export const getEventFormat = event => {
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
    ...event,
    startDate: getDateFormat(startDate, startTime),
    startDateString: startDate,
    endDate: getDateFormat(endDate, endTime),
    endDateString: endDate,
    startTimeString: startTime,
    endTimeString: endTime,
  };
};

export const addZeros = num => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

export const getDateFormat = (date, time) => {
  const dateFormat = date + "T" + getTimeFormat(time);
  return new Date(dateFormat);
};

export const getTimeFormat = time => {
  return time + ":00";
};
