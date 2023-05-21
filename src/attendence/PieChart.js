import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = (props) => {
    const data = {
      labels: ['Red', 'Green'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [props.ct, props.tt],
          backgroundColor: ['red', 'green',],
          hoverOffset: 4,
        },
      ],
    };
    
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
      },
    };
    return (<Pie data={data} options={options} />);
};

export default PieChart;
