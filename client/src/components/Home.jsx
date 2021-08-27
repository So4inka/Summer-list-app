import { Link, Route } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Home(props) {
  const { activities } = props;

  return (
    <div className="cards-container">
      {activities.map((activity) => (
        // <Link to={`/activities/${activity.fields.name}`}>

        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={activity.fields.view} />
          <Card.Body>
            <Card.Title>{activity.fields.name}</Card.Title>
            <Card.Text>{activity.fields.description}</Card.Text>
            <Link to={`/activities/${activity.id}`}>
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
