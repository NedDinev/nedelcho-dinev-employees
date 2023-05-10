import { filterEmployees } from "../../utils/filterEmployees";

export default function EmployeesTable(props) {
  const { data } = props;

  const filteredData = filterEmployees(data);

  return (
    <>
      <h1>All employees</h1>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>ProjectID</th>
            <th>DateFrom</th>
            <th>DateTo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.EmpID}</td>
              <td>{row.ProjectID}</td>
              <td>{row.DateFrom}</td>
              <td>{row.DateTo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>
        Employees who have worked together on common projects for the longest
        period of time
      </h1>

      <table>
        <thead>
          <tr>
            <th>Employee ID #1</th>
            <th>Employee ID #2</th>
            <th>Project ID</th>
            <th>Days worked</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.firstEmployee}</td>
              <td>{row.secondEmployee}</td>
              <td>{row.projectID}</td>
              <td>{row.daysWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
