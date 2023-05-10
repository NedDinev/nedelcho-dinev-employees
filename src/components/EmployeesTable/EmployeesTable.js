import { filterEmployees } from "../../utils/filterEmployees";

import Table from "react-bootstrap/Table";

export default function EmployeesTable(props) {
  const { data } = props;
  console.log(data);
  const filteredData = filterEmployees(data);

  return (
    <Table responsive striped bordered hover>
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
    </Table>
  );
}
