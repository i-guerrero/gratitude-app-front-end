import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Button, Row, Col } from "react-bootstrap";

export default function EntryDetails() {
  const [entry, setEntry] = useState([]);
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/entries/${id}`)
      .then((response) => {
        setEntry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, API]);

  const deleteEntry = () => {
    axios.delete(`${API}/entries/${id}`)
    .then(() => {
        navigate(`/entries`);
    })
    .catch(error => {
        console.log(error);
    });
  };

  const handleDelete = () => {
    deleteEntry();
  }

  return (
    <div>
        <Container>
            <Row>
                <Col><Button variant="primary" onClick={() => navigate(`/entries`)}>⬅️ Back</Button></Col>
                <Col><Button variant="dark" onClick={() => navigate(`/entries/${id}/edit`)}>✏️ Edit</Button></Col>
                <Col><Button variant="danger" onClick={handleDelete}>🗑 Delete</Button></Col>
                
                
            </Row>
        </Container>
      
      <h2>Thankful Entry #{entry.id} {entry.is_favorite ? "- ⭐️" : null}</h2>
      <Container>
      <p>Name: {entry.name}</p>
      <p>Date: {entry.date}</p>
      <h3>My Gratitude List</h3>
      </Container>
      <Container>
      {entry.person ? <p>I am really grateful for <span className="bold">{entry.person}</span>.</p> : null}
      {entry.place ? <p>I really appreciate <span className="bold">{entry.place}</span>.</p> : null}
      {entry.thing ? <p>I am thankful for <span className="bold">{entry.thing}</span>.</p> : null}
      {entry.mood ? <p>My mood today is <span className="bold">{entry.mood}/10</span>.</p> : null}
      </Container>
      {entry.notes ? <div><h3>Today's journal entry:</h3><Container><p>{entry.notes}</p></Container></div> : null}
      {entry.photo_url ? <Image src={entry.photo_url} fluid rounded /> : null}
      <Button variant="primary" onClick={() => navigate(`/entries`)}>⬅️ Back</Button>
      <Button variant="dark" onClick={() => navigate(`/entries/${id}/edit`)}>✏️ Edit</Button>
      <Button variant="danger" onClick={handleDelete}>🗑 Delete</Button>
    </div>
  );
}
