import moment from "moment";

const dateToTimestamp = (str) => {
  // use timestamps to calculate employees working days and accept different time formats
  const date = new Date(str);

  const timestamp = date.getTime();

  return timestamp;
};

const convertNullIfNeeded = (str) => (str !== "NULL" ? str : dateNow());

const dateNow = () => moment(new Date()).format("YYYY-MM-DD"); // converts today's date into "MM-DD-YYYY" format

export const dateFormatter = (dataString) =>
  dateToTimestamp(convertNullIfNeeded(dataString));

export const millisecondsToDays = (maxWorkingDaysInMilliseconds) =>
  maxWorkingDaysInMilliseconds / (1000 * 3600 * 24);

export const calculateOverlapDays = (dateTo1, dateTo2, dateFrom1, dateFrom2) =>
  Math.min(dateTo1, dateTo2) - Math.max(dateFrom1, dateFrom2);
