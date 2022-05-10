import React from 'react';
import { BarChart, Bar } from 'recharts';

function ExerciseChart() {
  const data = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 },
  ];

  return (
    <BarChart width={700} height={700}>
      <Bar 
      data={data} 
      dataKey='students' 
      outerRadius={250} 
      fill='green' />
    </BarChart>
  );
}

export default ExerciseChart;