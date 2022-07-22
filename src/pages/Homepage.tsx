import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import axios from "axios";
import "./Homepage.scss";

const Homepage = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/events")
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(events);
  return (
    <div className="Homepage">
      <Header></Header>
      <p>Évenements la une:</p>
      {events.map((event) => (
        <div className="event_container">
          <p>{event.title}</p>
          <p>{event.description}</p>
          <p>{event.is_free}</p>
          <p>{event.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
