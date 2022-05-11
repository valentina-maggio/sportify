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
            outerRadius={180} 
            fill="#8884d8" 
            label={chartData}/>
            
            
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      );
}

export default WorkoutChart;
