function Workout({ date, duration, name, category }) {
  return (
    <div>
      <span>{date}</span>
      <h4>{duration}</h4>
      <h4>{name}</h4>
      <h4>{category}</h4>
    </div>
  );
}

export default Workout;
