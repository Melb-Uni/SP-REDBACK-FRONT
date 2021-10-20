import React from "react";
import { Line } from "react-chartjs-2";

export default function ThreeLineChart(props) {
  const data_list = props.data;
  const three_line_data= {
      labels: ['0', '10', '20', '30', '40', '50', '60'],
      datasets: [
        {
          label: 'Progress Percentage Per Day on Jira',
          data: data_list[0],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          yAxisID: 'y-axis-1',
        },
       {
          label: 'Progress Percentage Per Day on Git',
          data: data_list[1],
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          yAxisID: 'y-axis-2',
        },
	{
          label: 'Progress Percentage Per Day on Confluence',
          data: data_list[2],
          fill: false,
          backgroundColor: 'rgb(200, 99, 20)',
          borderColor: 'rgba(200, 99, 20, 0.2)',
          yAxisID: 'y-axis-3',
        },
    
      ],
    };

  const three_line_options = {
   scales: {
    xAxes:[{
        scaleLabel: {
		display:true,
		labelString:"Days from the Project Commencement",
	},
    },],
    yAxes: [
       {
         type: 'linear',
         display: true,
         position: 'left',
         id: 'y-axis-1',
	 scaleLabel: {
		display:true,
		labelString:"Progress Percentage (%)",},	 
       },
       {
         type: 'linear',
         display: true,
         position: 'right',
         id: 'y-axis-2',

       },
       {
         type: 'linear',
         display: true,
         position: 'right',
         id: 'y-axis-3',
	 scaleLabel: {
		display:true,
		labelString:"Progress Percentage (%)",},
         gridLines: {
           drawOnArea: false,
         },
       },
     ],
    },
  };
 

  return (
      <div style={{ position: "relative", margin: "auto", width: "80vw" }}>
        <Line data={three_line_data} options={three_line_options} />
      </div>
    );
}
