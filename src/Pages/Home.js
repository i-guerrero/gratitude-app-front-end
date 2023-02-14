import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <Container>
        <h1>Welcome to the Gratitude App</h1>
        <p>This is a gratitude journal.</p>
        <Link to="/entries">
          <Button variant="dark">View List of Journal Entries!</Button>
        </Link>
      </Container>
    </div>
  );
}
