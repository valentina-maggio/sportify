import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const colors = ['#8884d8', '#9cacf1', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57']
const data01 = [
	{name: 'Yoga', value: 500, fill: colors[0],}, 
	{name: 'HIIT', value: 300, fill: colors[1],},
 	{name: 'Cardio', value: 300, fill: colors[2]}, 
  {name: 'Walking', value: 200, fill: colors[3]},
  {name: 'Weights', value: 278, fill: colors[4]}, 
  {name: 'Recovery', value: 189, fill: colors[5]},
];






function WorkoutChart() {
  

  return (
    <PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data01} cx={240} cy={200} outerRadius={180} fill="#8884d8" label/>
        
        <Tooltip/>
       </PieChart>
  );
}

export default WorkoutChart;
