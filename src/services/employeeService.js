import { findCommonProjects, sortPairs } from "../utils/employeeUtils";

export const filterEmployees = (data) => {
  
  const commonProjectsArr = findCommonProjects(data);

  return sortPairs(commonProjectsArr);
};
