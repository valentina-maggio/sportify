function FormCalendar() {
  return (
    <div>
      <h2>Workout</h2>
      <form>
        <input
          type="text"
          id="workout-name"
          name="workout-name"
          placeholder="Name"
        />
        <input
          type="text"
          id="workout-type"
          name="workout-type"
          placeholder="Type"
        />
        <input
          type="text"
          id="workout-duration"
          name="workout-duration"
          placeholder="Duration"
        />
        <input
          type="text"
          id="workout-intensity"
          name="workout-intensity"
          placeholder="Intensity"
        />
        <input
          type="text"
          id="workout-url"
          name="workout-url"
          placeholder="URL"
        />
      </form>
      <button type="submit">Save workout</button>
    </div>
  );
}

export default FormCalendar;
