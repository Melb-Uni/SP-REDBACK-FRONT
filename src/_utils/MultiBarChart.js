import React from "react";
import { Bar } from "react-chartjs-2";

export default function MultiBarChart(props) {
  const data_list = props.data;
  const bar_data = {
  labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
  datasets: [
    {
      label: 'Jira Ticket Counts Per 10 Days',
      data: data_list[0],
      backgroundColor: 'rgb(255, 99, 132,0.8)',
    },
    {
      label: 'Confluence Counts Per 10 Days',
      data: data_list[1],
      backgroundColor: 'rgb(54, 162, 235,0.8)',
    },
    {
      label: 'Github Commits Per 10 Days',
      data: data_list[2],
      backgroundColor: 'rgb(75, 192, 192,0.8)',
    },
  ],
};

  let multi_bar_options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
		display:true,
		labelString:"Progress Per 10 Days",
	},
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
		display:true,
		labelString:"Days from the Project Commencement",
	},
      },
    ],

},}

  return (
      <div style={{ position: "relative", margin: "auto", width: "80vw" }}>
        <Bar data={bar_data} options={multi_bar_options} />
      </div>
    );
}
