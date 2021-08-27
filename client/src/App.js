import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Activities from "./Activities";
import Form from "./components/Form";
import { baseUrl, config } from "./services";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
      <Navbar />
      <Route path="/" exact>
        <section className="head">
          <h1> Summer Fun List</h1>
          </section>
        <Home activities={activities} />
      </Route>
      <Route path="/activities/:id">
        <Activities activities={activities} />
      </Route>
      <Route path="/new">
        <Form toggleFetch={toggleFetch} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form
          activities={activities}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <footer>
        <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" />
        <img src=" https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png" />
      </footer>
    </div>
  );
}

export default App;
