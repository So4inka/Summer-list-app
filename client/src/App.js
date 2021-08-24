import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Activities from "./Activities";
import Form from "./Form";
import { baseUrl, config } from "./services";
import Navbar from "./components/Navbar";

function App() {
  const [activities, setActivities] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchActivity = async () => {
      const resp = await axios.get(baseUrl, config);
      console.log(resp.data);
      setActivities(resp.data.records);
    };
    fetchActivity();
  }, [toggleFetch]);

  return (
    <div>
      <h1> Summer Activities List</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/new"> Add new Activity</Link>
      <br />
      <Route path="/" exact>
        {activities.map((activity) => (
          <Link to={`/activities/${activity.fields.name}`}>
            <h2>{activity.fields.name}</h2>
            <img src={activity.fields.view} alt="pic" />
          </Link>
        ))}
      </Route>
      <Route path="/activities/:name">
        <Activities activities={activities} />
      </Route>
      <Route path="/new">
        <Form toggleFetch={toggleFetch} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
