import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <Container>
        <h1>
          Welcome to the <span className="blue">Thankful Gratitude App</span>
        </h1>
        <p>This is your gratitude journal ❤️.</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_EdjUMsSxI0bRVUvnGUuJUPw5LZMQzClNw&usqp=CAU"
          alt="gratitude"
        />
        <p>
          Showing gratitude daily can improve your - mood, sleep, and outlook on
          life.
        </p>
        <Link to="/entries">
          <Button variant="primary">Visit Your Journal Entries ➡️</Button>
        </Link>
        <br></br> <br></br>
        <img
          src="https://stenzelclinical.com/wp-content/uploads/2017/06/Search-for-Joy-and-Happiness.jpg"
          alt="woman smiling at Sun"
        ></img>
      </Container>
    </div>
  );
}
