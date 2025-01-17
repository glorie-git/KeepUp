const EventDetails = ({ event }) => {
  const _date = new Date(event.date);
  const day = `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`;
  const time = `${_date.getHours()}:${_date.getMinutes()}`;
  return (
    <div className="event-details">
      <h4>{event.title}</h4>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

export default EventDetails;
