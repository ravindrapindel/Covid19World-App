import React from 'react';
import { Bar } from 'react-chartjs-2';
import classes from "./BarChart.module.css";



function BarChart(props){

let activeCase =  props.Case;
let date = props.date;

const data = {
        labels: date,
        datasets: [
          {
            label: props.label,
            data: activeCase,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
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

    return(
  <>
    <div className={classes.Heading} >
    {props.label + " in " + props.country}  
    </div>
    <div className={classes.Chart} >
    <Bar data={data} options={options} />
    </div>
  </>
);
}

export default BarChart;