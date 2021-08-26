import { useParams, Link } from "react-router-dom";

// import Rating from "./Rating";
function Activities(props) {
  const { name } = useParams();
  const activity = props.activities.find(
    (activity) => activity.fields.name === name
  );

  return !activity ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h2>{activity.fields.name}</h2>
      <br />
      <p>{activity.fields.location}</p>
      <br />
      <p>{activity.fields.budget}</p>
      <br />
      <p>{activity.fields.stuff}</p>
      <br />
      <p>{activity.fields.link}</p>
      <br />
      <p>{activity.fields.rating}</p>
      <br />
      {/* <Rating rating={rating} /> */}
      <Link to={`/edit/${activity.fields.name}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}
export default Activities;
