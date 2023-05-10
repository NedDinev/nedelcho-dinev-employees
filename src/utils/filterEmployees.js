import { dateFormatter } from "./dateFormatter";

const findCommonProjects = (arr) => {
  const commonProjects = {};
  arr.forEach((obj) => {
    const projectId = obj.ProjectID;
    commonProjects[projectId] = commonProjects[projectId] || []; //if  commonProjects[projectId] is undefined put []
    commonProjects[projectId].push(obj);
  });
  return Object.values(commonProjects).filter((group) => group.length > 1);
};

const findLongestWorkingPair = (employees) => {
  let maxWorkingDays = 0;
  let longestWorkingPair = null;
  let projectID = null;

  employees.forEach((employee1, index1) => {
    employees.slice(index1 + 1).forEach((employee2) => {
      if (employee1.ProjectID === employee2.ProjectID) {
        const dateFrom1 = dateFormatter(employee1.DateFrom);
        const dateTo1 = dateFormatter(employee1.DateTo);
        const dateFrom2 = dateFormatter(employee2.DateFrom);
        const dateTo2 = dateFormatter(employee2.DateTo);

        const overlapDays =
          Math.min(dateTo1, dateTo2) - Math.max(dateFrom1, dateFrom2);

        if (overlapDays > 0 && overlapDays > maxWorkingDays) {
          maxWorkingDays = overlapDays;
          longestWorkingPair = [employee1, employee2];
          projectID = employee1.ProjectID;
        }
      }
    });
  });

  const daysWorked = Math.ceil(maxWorkingDays / (1000 * 3600 * 24));

  return {
    firstEmployee: longestWorkingPair[0].EmpID,
    secondEmployee: longestWorkingPair[1].EmpID,
    projectID,
    daysWorked,
  };
};

const sortPairs = (projectsArr) => {
  return projectsArr
    .map((projectEmp) => findLongestWorkingPair(projectEmp))
    .sort(({ daysWorked: a }, { daysWorked: b }) => b - a);
};

export const filterEmployees = (data) => {
  const commonProjectsArr = findCommonProjects(data);

  const sortedResult = sortPairs(commonProjectsArr);

  return sortedResult;
};
