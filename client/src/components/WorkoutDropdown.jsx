// import * as React from 'react';
// import Dropdown from './Dropdown';
// import Calendar from './Calendar';
// import { useState } from 'react';

// function WorkoutDropdown() {
//   const [exercise, setExercise] = useState('');
//   // const [category, setCategory] = React.useState('category');
//   const [duration, setDuration] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [message, setMessage] = useState('');

//   // const handleExerciseChange = (event) => {
//   //   setExercise(event.target.value);
//   // };

//   // const handleDurationChange = (event) => {
//   //   setDuration(event.target.value);
//   // };

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://localhost:5000/workouts", {
//         method: "POST",
//         body: JSON.stringify({
//           exercise: exercise,
//           duration: duration,
//           date: date,
//           time: time,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setExercise("")
//         setDuration("");
//         setDate("");
//         setTime("");
//         setMessage("Workout successfully scheduled");
//         console.log('workout saved');
//       } else {
//         setMessage("Some error occured");
//         console.log('error!');
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Calendar />
//       <Dropdown
//         label="Select exercise"
//         options={[
//           { label: '5K Run', value: '5K run' },
//           { label: 'Full body HIIT', value: 'full body hiit' },
//           { label: 'Yoga for beginners', value: 'Yoga for beginners' },
//           { label: 'Toned arms', value: 'toned arms' },
//           { label: 'Kickboxing', value: 'kickboxing' },
//         ]}
//         value={exercise}
//         onChange={(e) => setExercise(e.target.value)}
//       />
//       <Dropdown
//         label="Select duration"
//         options={[
//           { label: '10 minutes', value: '10 minutes' },
//           { label: '15 minutes', value: '15 minutes' },
//           { label: '20 minutes', value: '20 minutes' },
//           { label: '30 minutes', value: '30 minutes' },
//           { label: '45 minutes', value: '45 minutes' },
//           { label: '60 minutes', value: '60 minutes' },
//         ]}
//         value={duration}
//         onChange={(e) => setDuration(e.target.value)}
//       />
//        <input type="submit" value="Schedule workout" onSubmit={handleSubmit}/>
//        <div className="message">{message ? <p>{message}</p> : null}</div>
//     </div>
//   );
// }

// export default WorkoutDropdown;

