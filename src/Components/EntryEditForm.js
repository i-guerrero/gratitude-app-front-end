import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function EntryEditForm() {
  const [entry, setEntry] = useState({
    name: "",
    date: "",
    person: "",
    place: "",
    thing: "",
    mood: "",
    is_favorite: false,
    notes: "",
    photo_url: "",
  });

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/entries/${id}`)
      .then(
        (response) => {
          setEntry(response.data);
        },
        (error) => navigate(`/not-found`)
      )
      .catch((e) => console.warn("catch", e));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setEntry({ ...entry, is_favorite: !entry.is_favorite });
  };

  const updateEntry = (updatedEntry) => {
    axios
      .put(`${API}/entries/${id}`, updatedEntry)
      .then(() => {
        navigate(`/entries/${id}`);
      })
      .catch((e) => console.warn("catch", e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry(entry);
  };

  return (
    <div>
      <h2>Edit Thankful Entry</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={entry.name}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Today's Date*</Form.Label>
          <Form.Control
            type="text"
            placeholder="mm/dd/yyyy"
            value={entry.date}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="person">
          <Form.Label>Person you are grateful for:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Person's name"
            value={entry.person}
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted">
            Name of someone you really appreciate.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="place">
          <Form.Label>Place you appreciate:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter place"
            value={entry.place}
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted">Place you appreciate.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="thing">
          <Form.Label>Enter something you appreciate:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter thing"
            value={entry.thing}
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted">Thing you appreciate.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mood">
          <Form.Label>Today's Mood:</Form.Label>
          <Form.Control
            type="number"
            placeholder="1-10"
            value={entry.mood}
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted">
            Rate your mood today on a scale from 1-10.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="notes">
          <Form.Label>Today's Journal:</Form.Label>
          <Form.Control
            type="text"
            placeholder="notes"
            value={entry.notes}
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted">
            Express gratitude. Write about what you are grateful for today.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="photo_url">
          <Form.Label>Photo URL:</Form.Label>
          <Form.Control
            type="text"
            placeholder="photo url"
            value={entry.photo_url}
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted">
            Add the url of a photo that reminds you of what you are grateful
            for.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="is_favorite">
          <Form.Check
            type="checkbox"
            label="Add entry to list of favorites"
            value={entry.is_favorite}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
