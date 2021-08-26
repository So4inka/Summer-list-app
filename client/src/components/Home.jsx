import { Link, Route } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Home(props) {
  const { activities } = props;

  return (
    <div className="cards-container">
      {activities.map((activity) => (
        // <Link to={`/activities/${activity.fields.name}`}>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={activity.fields.view} />
          <Card.Body>
            <Card.Title>{activity.fields.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={`/activities/${activity.fields.name}`}>
              <Button variant="primary">Let's See</Button>
            </Link>
          </Card.Body>
        </Card>
        // </Link>
      ))}
    </div>
  );
}

export default Home;
