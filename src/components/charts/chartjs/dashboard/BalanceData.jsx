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


 const myBalanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
        label: 'Demand',
        data: [90, 85, 100, 105],
        backgroundColor: [
          '#0062ff', '#0062ff', '#0062ff', '#0062ff',
        ],
        borderColor: [
          '#0062ff', '#0062ff', '#0062ff', '#0062ff',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Supply',
        data: [200, 200, 200, 200],
        backgroundColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  const myBalanceOptions = {
  scales: {
    x: { // Replaces 'xAxes'
      stacked: true,
      barPercentage: 0.7,
      position: 'bottom',
      display: true,
      grid: { // Replaces 'gridLines'
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: true, // This will remove only the label
        stepSize: 500,
        color: "#111", // Replaces 'fontColor'
        font: {
          size: 12 // Replaces 'fontSize'
        },
        padding: 10
      }
    },
    y: { // Replaces 'yAxes'
      stacked: false,
      display: false,
      grid: { // Replaces 'gridLines'
        drawBorder: true,
        display: false,
        color: "#eef0fa",
        drawTicks: false,
        zeroLineColor: 'rgba(90, 113, 208, 0)' // Note: zeroLineColor is not used by default in v4.
      },
      ticks: {
        display: true,
        beginAtZero: true,
        stepSize: 200,
        color: "#a7afb7", // Replaces 'fontColor'
        font: {
          size: 14 // Replaces 'fontSize'
        },
        callback: function(value) {
          return value + 'k';
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false // 'legend' moved under 'plugins'
    },
    tooltip: { // Replaces 'tooltips'
      backgroundColor: 'rgba(0, 0, 0, 1)'
    },
    datalabels: {
      display: false,
      align: 'center',
      anchor: 'center'
    }
  }
};


function BalanceData() {
  return (
    <Bar data={myBalanceData} options={myBalanceOptions}></Bar>
  )
}

export default BalanceData