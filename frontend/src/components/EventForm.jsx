import { useState } from "react";
import { useEventsContext } from "./useEventsContext";

const EventForm = () => {
  const { dispatch } = useEventsContext();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("13:00");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateAndTime = new Date(`${date}T${time}`);
    const event = { title, location, description, date: dateAndTime };

    const response = await fetch("http://localhost:4000/api/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLocation("");
      setDate("");
      setDescription("");
      setError(null);
      console.log("New event added");
      dispatch({ type: "CREATE_EVENT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Event</h3>

      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Location</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>Date</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <label>Time</label>
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />
      <button>Add Event</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EventForm;
