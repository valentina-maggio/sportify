/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';



function WorkoutChart() {
  const state = sessionStorage.getItem('item_key');
  console.log(`State passed in Workout Dropdown ${state}`);

  const [chartData, setChartData] = useState([]);

  const requestChartData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/workouts/history', {
        params: { user: state },
      });
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
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          data={chartData}
          cx={240}
          cy={300}
          outerRadius={180}
          fill='#8884d8'
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            // eslint-disable-next-line no-unused-vars
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            const values = chartData.map(i => i.value)
            
            const sum = values.reduce(function (pre, cur) { return pre + cur})
            
            return (
              
              <text
                x={x}
                y={y}
                fill='rgba (33, 33, 33, .8)'
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline='central'
              >  
                {`${chartData[index].name}\n`}
                {parseFloat(chartData[index].value/sum*100).toFixed(0)}%
              </text> 
            );
          }}
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default WorkoutChart;
