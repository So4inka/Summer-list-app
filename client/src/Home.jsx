import { Link, Route } from "react-router-dom";

function Home(props) {
  const { activities } = props;

  return (
    <div>
      {activities.map((activity) => (
        <Link to={`/activities/${activity.fields.name}`}>
          <h2>{activity.fields.name}</h2>
          <img src={activity.fields.view} alt="pic" />
        </Link>
      ))}
    </div>
  );
}

export default Home;
