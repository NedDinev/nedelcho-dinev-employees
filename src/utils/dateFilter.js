import moment from "moment";

export const dateToTimestamp = (str) => {
  // use timestamps to calculate employees working days
  const date = new Date(str);

  const timestamp = date.getTime();

  return timestamp;
};

export const convertNull = (str) => (str !== "NULL" ? str : dateNow());

export const dateNow = () => moment(new Date()).format("YYYY-MM-DD"); // converts today's date into "MM-DD-YYYY" format
