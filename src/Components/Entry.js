import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Entry({ entry }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={entry.photo_url} />
      <Card.Body>
        <Card.Title>
          {entry.person} - {entry.date}
        </Card.Title>
        <Card.Text>{entry.notes}</Card.Text>
        <Link to={`/entries/${entry.id}`}>
          <Button variant="dark">View Entry</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
