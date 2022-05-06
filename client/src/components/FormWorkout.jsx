import { useState } from "react";
// import axios from "axios";

function FormWorkout() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [link, setLink] = useState("");
  // const [workout, setWorkout] = useState({
  //   name: "",
  //   category: "",
  //   duration: "",
  //   intensity: "",
  //   link: "",
  // });

  // const handleChange = (e) => {
  //   setWorkout({
  //     ...workout,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = async () => {
    const workoutData = {
      name,
      category,
      duration,
      intensity,
      link,
    };

    try {
      const data = await fetch("http://localhost:3001/exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workoutData),
      });
      console.log(data);
    } catch (error) {
      console.log("Workout could not be created.", error.message);
    }

    // try {
    //   await axios.post("http://localhost:3001/exercises", workout);
    //   // console.log(response);
    // } catch (error) {
    //   console.log("Exercise could not be saved.", error.message);
    // }
  };

  return (
    <div>
      <h2>Workout</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          id="name"
          name="name"
          // value={workout.name}
          value={name}
          placeholder="Name"
          // onChange={handleChange}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="category"
          name="category"
          // value={workout.category}
          value={category}
          placeholder="Category"
          // onChange={handleChange}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          id="duration"
          // value={workout.duration} // Count in base 10
          value={duration}
          name="duration"
          placeholder="Duration"
          // onChange={parseInt(handleChange, 10)}
          // onChange={handleChange}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          id="intensity"
          // value={workout.intensity}
          value={intensity}
          name="intensity"
          placeholder="Intensity"
          // onChange={handleChange}
          onChange={(e) => setIntensity(e.target.value)}
        />
        <input
          type="text"
          id="link"
          // value={workout.link}
          value={link}
          name="link"
          placeholder="Link"
          // onChange={handleChange}
          onChange={(e) => setLink(e.target.value)}
        />
      </form>
      <input type="submit" value="Save workout" onClick={handleSubmit} />
    </div>
  );
}

export default FormWorkout;
