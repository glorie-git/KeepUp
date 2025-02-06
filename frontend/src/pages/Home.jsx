import {useEffect } from "react";
import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";
import { useEventsContext } from "../components/useEventsContext";

const Home = () => {
  const {events, dispatch} = useEventsContext()

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("http://localhost:4000/api/events");
      const json = await res.json();
      if (res.ok) {
        // setEvents(json);
        dispatch({type: 'SET_EVENTS', payload: json})
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
      <EventForm />
    </div>
  );
};

export default Home;
