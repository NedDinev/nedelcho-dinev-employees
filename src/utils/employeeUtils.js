import {
  calculateOverlapDays,
  dateFormatter,
  millisecondsToDays,
} from "./dateFormatter";

const findLongestWorkingPair = (projects) => {
  let maxWorkingDaysInMilliseconds = 0;
  let longestWorkingPair = null;
  let projectID = null;
  const currentWorkingDay = 1;

  projects.forEach((employee1, index) => {
    for (let i = index + 1; i < projects.length; i++) {
      const employee2 = projects[i];

      const isProjectsSame = employee1.ProjectID === employee2.ProjectID;
      if (isProjectsSame) {
        const dateFrom1 = dateFormatter(employee1.DateFrom);
        const dateTo1 = dateFormatter(employee1.DateTo);
        const dateFrom2 = dateFormatter(employee2.DateFrom);
        const dateTo2 = dateFormatter(employee2.DateTo);

        const overlapDays = calculateOverlapDays(
          dateTo1,
          dateTo2,
          dateFrom1,
          dateFrom2
        );

        if (overlapDays > 0 && overlapDays > maxWorkingDaysInMilliseconds) {
          maxWorkingDaysInMilliseconds = overlapDays + currentWorkingDay;
          longestWorkingPair = [employee1, employee2];
          projectID = employee1.ProjectID;
        }
      }
    }
  });

  const daysWorked = Math.ceil(
    millisecondsToDays(maxWorkingDaysInMilliseconds)
  );

  return {
    firstEmployee: longestWorkingPair[0].EmpID,
    secondEmployee: longestWorkingPair[1].EmpID,
    projectID,
    daysWorked,
  };
};

export const findCommonProjects = (arr) => {
  const commonProjects = {};
  arr.forEach((obj) => {
    const projectId = obj.ProjectID;
    commonProjects[projectId] = commonProjects[projectId] || []; //if  commonProjects[projectId] is undefined put []
    commonProjects[projectId].push(obj);
  });
  return Object.values(commonProjects).filter((group) => group.length > 1);
};

export const sortPairs = (projectsArr) => {
  return projectsArr
    .map((projectEmp) => findLongestWorkingPair(projectEmp))
    .sort(({ daysWorked: a }, { daysWorked: b }) => b - a);
};
