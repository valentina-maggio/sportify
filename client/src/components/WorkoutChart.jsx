import React from "react";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";



    const colors = ['#8884d8', '#9cacf1', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57']
    
    const data = [
      {name: 'Yoga', value: 500, fill: colors[0],}, 
      {name: 'HIIT', value: 300, fill: colors[1],},
      {name: 'Cardio', value: 300, fill: colors[2]}, 
      {name: 'Walking', value: 200, fill: colors[3]},
      {name: 'Weights', value: 278, fill: colors[4]}, 
      {name: 'Recovery', value: 189, fill: colors[5]},
    ];
    
    
    

  
    function WorkoutChart() {

      // const [workouts, setWorkouts] = useState([]);

      
      // const requestWorkouts = async () => {
      //   try {
      //     const res = await axios.get('http://localhost:3001/workouts')
      //     .then((response) => console.log(res.data));
      //     setWorkouts(res.data);
      //   } catch (error) {
      //     console.log(`Workout.jxs Component: ${error}`);
      //   }
      // };
      
      // useEffect(() => {
      //   requestWorkouts();
      // }, []);
      
      // console.log(workouts)
      
      // const data01 = []
      //  for (let i = 0; i < workouts.length; i++) {
      //     data01.push({
      //       name: workouts.category,
      //       value: workouts.duration,
      //       fill: colors[i]
      //     })
      //   }
      //   console.log(data01)


      return (
        <ResponsiveContainer>

        <PieChart width={800} height={400} >
            <Pie 
            
            isAnimationActive={false} 
            data={data} 
            cx={240} 
            cy={200} 
            outerRadius={180} 
            fill="#8884d8" 
            label={data}/>
            
            
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      );
}

export default WorkoutChart;
