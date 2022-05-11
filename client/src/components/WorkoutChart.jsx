
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";



    

  
    function WorkoutChart() {
      const [chartData, setChartData] = useState([]);

      const requestChartData = async () => {
        try {
          const res = await axios.get('http://localhost:3001/workouts/history');
          console.log(res);
          setChartData(res.data);
          
        } catch (error) {
          console.log(`Workout.jxs Component: ${error}`);
        }
      };

      useEffect(() => {
        requestChartData();
      }, []);
      


      return (
        <ResponsiveContainer>

        <PieChart width={800} height={400} >
            <Pie 
            
            isAnimationActive={false} 
            data={chartData} 
            cx={240} 
            cy={200} 
            outerRadius={160} 
            fill="#8884d8" 
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index
            }) => {
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {chartData[index].name}
                </text>
              );
            }}
            />
            
            
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      );
}

export default WorkoutChart;