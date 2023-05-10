import { useState } from "react";
import Papa from "papaparse";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

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
      <Container style={styles.container}>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <Card>
              <Card.Header>
                <h3>Pair of employees who have worked together</h3>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Import file to see all employees who have worked together on
                  common projects for the longest period of time
                </Card.Text>
                <Form style={styles.form}>
                  <Form.Group>
                    <Form.Control
                      id="exampleFormControlFile1"
                      label="Choose a CSV file to upload"
                      type="file"
                      accept=".csv"
                      onChange={handleFileUpload}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {!!data.length && <EmployeesTable data={data} />}
      </Container>
    </>
  );
}

const styles = {
  container: {
    width: "80%",
  },
  row: {
    marginTop: "50px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
  },
  col: {
    textAlign: "center",
  },

  form: {
    margin: "auto",
    maxWidth: "20em",
  },
};
