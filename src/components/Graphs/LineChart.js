import React from 'react';
import { Line } from 'react-chartjs-2';
import classes from "./LineChart.module.css";

function LineChart(props){
  
const data = {
  labels: props.date,
  datasets: [
    {
      label: props.label,
      data: props.Case,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(0, 0, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

return(<>
   <div className={classes.Heading} >
     {props.label + " in " + props.country}  
    </div>
    <div className={classes.Chart} > <Line data={data} options={options} /> </div>
   
    
  </>)
}

export default LineChart;
