import { useParams, Link } from "react-router-dom";
import Rating from "./Rating";
import { useState } from "react";
function Activities(props) {
  const { id } = useParams();
  const activity = props.activities.find((activity) => activity.id === id);
  const [rating, setRating] = useState(1);
  return !activity ? (
    <h1>Loading...</h1>
  ) : (
    <div className="show">
      <h2>{activity.fields.name}</h2>
      <br />
      <p>Where to? {activity.fields.location}</p>
      <br />
      <p>Budget for it: {activity.fields.budget}</p>
      <br />
      <p> What you'll need: {activity.fields.stuff}</p>
      <br />
      <a href={activity.fields.link}></a>
      <br />
      {/* <p>{activity.fields.rating}</p>  */}
       <Rating rating={rating} />
      <Link to={`/edit/${activity.id}`}>
        <button>
          {" "}
          Edit <br />
        </button>
      </Link>
    </div>
  );
}
export default Activities;
