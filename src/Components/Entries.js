import axios from "axios";
import { useState, useEffect } from "react";
import Entry from "./Entry";
import { Container, Row, Col } from "react-bootstrap";

export default function Entries() {
  const [entries, setEntries] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/entries`)
      .then((response) => {
        setEntries(response.data);
      })
      .catch((error) => console.log(error));
  }, [API]);
  return (
    <div>
      <h1>List of Thankful Entries</h1>
      <p>Thank YOU for showing gratitude</p>
      <Container>
        <Row>
          {entries.map((entry) => {
            return <Entry key={entry.id} entry={entry} />;
          })}
        </Row>
      </Container>
    </div>
  );
}
