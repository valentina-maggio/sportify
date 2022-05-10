import React from "react";
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

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  //   return (
    
    //     <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
    //       {data01.map(i=> i.name)}
    //     </text>
    //   );
    // };
    
    
    function WorkoutChart() {
      
  

      return (
        <ResponsiveContainer>

        <PieChart width={800} height={400}>
            <Pie 
            isAnimationActive={false} 
            data={data} 
            cx={240} 
            cy={200} 
            outerRadius={180} 
            fill="#8884d8" 
            label={data.name}/>
            
            
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      );
}

export default WorkoutChart;
