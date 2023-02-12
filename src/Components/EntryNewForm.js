import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function EntryNewForm() {
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

  const addEntry = () => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry();
  };

  return (
    <div>
      <h2>New Thankful Entry</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name*</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Today's Date*</Form.Label>
          <Form.Control type="text" placeholder="mm/dd/yyyy" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="person">
          <Form.Label>Person you are grateful for:</Form.Label>
          <Form.Control type="text" placeholder="Person's name" />
          <Form.Text className="text-muted">
            Name of someone you really appreciate.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="place">
          <Form.Label>Place you appreciate:</Form.Label>
          <Form.Control type="text" placeholder="Enter place" />
          <Form.Text className="text-muted">Place you appreciate.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="thing">
          <Form.Label>Enter something you appreciate:</Form.Label>
          <Form.Control type="text" placeholder="Enter thing" />
          <Form.Text className="text-muted">Thing you appreciate.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mood">
          <Form.Label>Today's Mood:</Form.Label>
          <Form.Control type="number" placeholder="1-10" />
          <Form.Text className="text-muted">
            Rate your mood today on a scale from 1-10.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="notes">
          <Form.Label>Today's Journal:</Form.Label>
          <Form.Control type="text" placeholder="notes" />
          <Form.Text className="text-muted">
            Express gratitude. Write about what you are grateful for today.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="photo_url">
          <Form.Label>Photo URL:</Form.Label>
          <Form.Control type="text" placeholder="photo url" />
          <Form.Text className="text-muted">
            Add the url of a photo that reminds you of what you are grateful
            for.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="is_favorite">
          <Form.Check type="checkbox" label="Add entry to list of favorites" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
