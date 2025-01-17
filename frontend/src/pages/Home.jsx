import { useState, useEffect } from "react";
import EventDetails from "../components/EventDetails";

const Home = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("http://localhost:4000/api/events");
      const json = await res.json();
      if (res.ok) {
        setEvents(json);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="home">
      <div className="events">
        {events &&
          events.map((event) => {
            return <EventDetails key={event._id} event={event} />;
          })}
      </div>
    </div>
  );
};

export default Home;
