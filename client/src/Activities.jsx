import { useParams, Link } from "react-router-dom";
// import Rating from "./Rating";
function Activities(props) {
  const { id } = useParams();
  const activity = props.activities.find((activity) => activity.id === id);

  return !activity ? (
    <h1>Loading...</h1>
  ) : (
    <div className="show">
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
      <Link to={`/edit/${activity.id}`}>
        <button> Edit   <br /></button>
      </Link>
    </div>
  );
}
export default Activities;
