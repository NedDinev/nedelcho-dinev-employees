import { useState } from "react";
import Papa from "papaparse";
import EmployeesTable from "../EmployeesTable/EmployeesTable";

export default function DataInput() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length && <EmployeesTable data={data} />}
    </>
  );
}
