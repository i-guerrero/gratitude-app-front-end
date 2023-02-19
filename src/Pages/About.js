import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <h1>
        About the <span className="blue">Thankful Gratitude App</span>
      </h1>
      <img src="https://www.poshmn.com/wp-content/uploads/2018/11/thankful-1036x479.jpg"></img>
      <p>
        In a 2003 study, researchers compared the well-being of participants who
        kept a weekly list of things they were grateful for with participants
        who either kept a list of things that irritated them or of their
        day-to-day lives. The result? Those gratitude-focused participants
        exhibited a significantly better sense of well-being and improved mood
        compared to those who did not. The researchers concluded that “a
        conscious focus on blessings may have emotional and interpersonal
        benefits.” -{" "}
        <a href="https://positiveroutines.com/gratitude-apps/">
          Positive routines
        </a>
      </p>
      <p>
        Research has shown that showing gratitude daily has immense health
        benefits including:
      </p>
      <ul>
        <li>becoming happier</li>
        <li>thinking more positively</li>
        <li>and sleeping better</li>
      </ul>
      <p>
        The Gratitude app allows users to log journal entries to practice
        gratitude for things, places, and people they are thankful for. There is
        also a note section for users to log things they love about themselves
        and something they were grateful for that day.
      </p>
    </Container>
  );
}
