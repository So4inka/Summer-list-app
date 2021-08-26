import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl, config } from "../services";
import { useParams } from "react-router-dom";

function Form(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [stuff, setStuff] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState(1);
  const [view, setView] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.name && props.activities.length > 0) {
      const acitivityToEdit = props.activities.find(
        (activity) => params.name === activity.fields.name
      );
      if (acitivityToEdit) {
        setName(acitivityToEdit.fields.name);
        setLocation(acitivityToEdit.fields.location);
        setBudget(acitivityToEdit.fields.budget);
        setStuff(acitivityToEdit.fields.stuff);
        setLink(acitivityToEdit.fields.link);
        setRating(acitivityToEdit.fields.rating);
        setView(acitivityToEdit.fields.view);
      }
    }
  }, [params.name, props.acitivities]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newActivity = {
      name,
      location,
      budget,
      stuff,
      link,
      rating,
      view,
    };
    if (params.name) {
      await axios.put(
        `${baseUrl}/${params.name}`,
        { fields: newActivity },
        config
      );
    } else {
      await axios.post(baseUrl, { fields: newActivity }, config);
    }
    props.setToggleFetch(!props.toggleFetch);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Activity Name"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          required
        />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          text="text"
          value={location}
          placeholder="Activity Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="stuff">You'll need:</label>
        <input
          id="stuff"
          type="text"
          value={stuff}
          placeholder="Stuff you'll need"
          onChange={(e) => setStuff(e.target.value)}
        />
        <label htmlFor="budget">Budget:</label>
        <input
          id="budget"
          type="text"
          value={budget}
          placeholder="Budget"
          onChange={(e) => setBudget(e.target.value)}
        />
        <label htmlFor="link">Link:</label>
        <input
          id="link"
          type="url"
          value={link}
          placeholder="Link"
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="range"
          min={1}
          max={5}
          value={rating}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.valueAsNumber)}
          required
        />
        <label htmlFor="view">Photo:</label>
        <input
          id="view"
          type="url"
          value={view}
          placeholder="View"
          onChange={(e) => setView(e.target.value)}
        />

        <button type="submit">Add New</button>
      </form>
    </div>
  );
}

export default Form;
