import moment from "moment";

export const dateToTimestamp = (str) => {
  // use timestamps to calculate employees working days
  const date = new Date(str);

  const timestamp = date.getTime();

  return timestamp;
};

export const convertNull = (str) => (str !== "NULL" ? str : dateNow());

export const convertDateFormat = (date) => {
  let mydate = moment(date, "DD/MM/YYYY");

  //format that date into a different format
  return moment(mydate).format("MM-DD-YYYY");
};

export const dateNow = () => moment(new Date()).format("MM-DD-YYYY");
