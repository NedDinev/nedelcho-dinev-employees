import { convertDateFormat, convertNull, dateToTimestamp } from "./dateFilter";

export const filterEmployees = (data) => {
  const findCommonProjects = (arr) => {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
      const projectID = arr[i].ProjectID;
      if (result[projectID]) {
        result[projectID].push(arr[i]);
      } else {
        result[projectID] = [arr[i]];
      }
    }
    const duplicates = Object.values(result).filter(
      (group) => group.length > 1
    );
    return duplicates;
  };
  const commonProjectsArr = findCommonProjects(data);

  const findDaysWorkedPerEmployee = (arr) => {
    const convertedEmployeeWorkDays = arr[0].map((employee) => {
      const result = { ...employee };
      console.log(result.DateFrom);
      result.DateFrom = dateToTimestamp(convertDateFormat(result.DateFrom));

      const nullToDate = convertNull(result.DateTo);
      result.DateTo = dateToTimestamp(convertDateFormat(nullToDate));
      
      return result;
    });
    return convertedEmployeeWorkDays;
  };

  const findMachingDaysWorked = (arr) => {};

  const daysWorked = findDaysWorkedPerEmployee(commonProjectsArr);

  console.log({ daysWorked });
  //console.log(findCommonProjects(data));
};
