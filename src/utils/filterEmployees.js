import { convertNull, dateToTimestamp } from "./dateFilter";

export const filterEmployees = (data) => {
  const result = [...data];
  console.log(data);

  const findCommonProjects = (arr) => {
    const commonProjects = {};
    arr.map((obj) => {
      const projectId = obj.ProjectID;
      commonProjects[projectId] = commonProjects[projectId] || [];
      commonProjects[projectId].push(obj);
    });
    return Object.values(commonProjects).filter((group) => group.length > 1);
  };

  const commonProjectsArr = findCommonProjects(result);

  const convertNullDate = (projectsArr) => {
    const projects = projectsArr.map((currProject) =>
      currProject.map((employee) => {
        employee.DateTo = convertNull(employee.DateTo);

        return employee;
      })
    );

    return projects;
  };
  const filteredDateProjectsArr = convertNullDate(commonProjectsArr);
  console.log(filteredDateProjectsArr);

  const findLongestWorkingPair = (employees) => {
    let maxWorkingDays = 0;
    let longestWorkingPair = null;
    let projectID = null;

    employees.forEach((employee1, index1) => {
      employees.slice(index1 + 1).forEach((employee2) => {
        if (employee1.ProjectID === employee2.ProjectID) {
          const dateFrom1 = dateToTimestamp(employee1.DateFrom);
          const dateTo1 = dateToTimestamp(employee1.DateTo);
          const dateFrom2 = dateToTimestamp(employee2.DateFrom);
          const dateTo2 = dateToTimestamp(employee2.DateTo);

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

    const days = Math.ceil(maxWorkingDays / (1000 * 3600 * 24));

    console.log(longestWorkingPair);

    const resultObj = {
      firstEmployee: longestWorkingPair[0].EmpID,
      secondEmployee: longestWorkingPair[1].EmpID,
      projectID,
      daysWorked: days,
    };

    return resultObj;
  };

  const sortPairs = (projectsArr) => {
    const sortByWorkedDays = projectsArr.map((projectEmp) =>
      findLongestWorkingPair(projectEmp)
    );

    return sortByWorkedDays.sort(({ daysWorked: a }, { age: b }) => a - b);
  };

  const sortedResult = sortPairs(filteredDateProjectsArr);
  return sortedResult;
};
