import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const accountRetentionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
        label: 'Demand',
        data: [33, 48, 39, 36, 36],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [94, 28, 49, 25, 20],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [66, 33, 25, 36, 69],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  const accountRetentionOptions = {
  scales: {
    x: { 
      stacked: false,
      position: 'bottom',
      display: true,
      barPercentage: 0.7,
      categoryPercentage: 1,
      grid: { 
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: true, 
        stepSize: 500,
        color: "#a7afb7", 
        font: {
          size: 14 
        },
        padding: 10,
      }
    },
    y: { 
      stacked: false,
      display: true,
      grid: { 
        drawBorder: false,
        display: true,
        color: "#c31a56",
        drawTicks: false,
        zeroLineColor: 'rgba(90, 113, 208, 0)' 
      },
      ticks: {
        display: false,
        beginAtZero: true,
        stepSize: 40,
        color: "#a7afb7", 
        font: {
          size: 14 
        },
        callback: function(value) {
          return value + 'k';
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false 
    },
    tooltip: { 
      backgroundColor: 'rgba(0, 0, 0, 1)'
    },
    datalabels: {
      display: false,
      align: 'center',
      anchor: 'center'
    }
  }
};


function AccountRetention() {
  return (
    <Bar data={accountRetentionData} options={accountRetentionOptions}></Bar>
  )
}

export default AccountRetention