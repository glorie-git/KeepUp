const EventDetails = ({ event }) => {
  const _date = new Date(event.date);
  const day = `${_date.getFullYear()}-${
    _date.getMonth() + 1
  }-${_date.getDate()}`;
  console.log(event.date, _date.getMonth());
  const minutes = `${_date.getMinutes()}`.padStart(2, "0");
  const time = `${_date.getHours()}:${minutes}`;
  return (
    <div className="event-details">
      <h4>{event.title}</h4>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <p>{day}</p>
      <p>{`${time}`.padStart(2, "00")}</p>
    </div>
  );
};

export default EventDetails;
