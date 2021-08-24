import axios from "axios";
import { useState } from "react";
import { baseUrl, config } from "./services";

function Form(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [stuff, setStuff] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newActivity = {
      name,
      location,
      budget,
      stuff,
      link,
      rating,
    };
    await axios.post(baseUrl, { fields: newActivity }, config);
    props.setToggleFetch(!props.toggleFetch);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="Activity Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          value={location}
          placeholder="Activity Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <input
          value={stuff}
          placeholder="Stuff you'll need"
          onChange={(e) => setStuff(e.target.value)}
        ></input>
        <input
          value={budget}
          placeholder="Budget"
          onChange={(e) => setBudget(e.target.value)}
        ></input>
        <input
          value={link}
          placeholder="Link"
          onChange={(e) => setLink(e.target.value)}
        ></input>
        <input
          value={rating}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        ></input>
        <button type="submit">Add!!!</button>
      </form>
    </div>
  );
}

export default Form;
