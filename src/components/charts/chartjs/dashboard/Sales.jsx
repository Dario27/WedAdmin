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

 const deviceSaleData = {
    labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
    datasets: [{
        label: 'Demand',
        data: [450, 500, 300, 350, 200, 320, 310, 700],
        backgroundColor: [
          '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
        ],
        borderColor: [
          '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Supply',
        data: [250, 100, 310, 75, 290, 100, 500, 260],
        backgroundColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  const deviceSaleOptions = {
  scales: {
    x: { // Replaces 'xAxes'
      stacked: false,
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
        color: "#a7afb7", // Replaces 'fontColor'
        font: {
          size: 14 // Replaces 'fontSize'
        },
        padding: 10,
      }
    },
    y: { // Replaces 'yAxes'
      stacked: false,
      display: true,
      grid: { // Replaces 'gridLines'
        drawBorder: false,
        display: true,
        color: "#eef0fa",
        drawTicks: false,
        zeroLineColor: 'rgba(90, 113, 208, 0)' // Note: zeroLineColor is not used by default in Chart.js v4.
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
    categoryPercentage: 0.5,
    barPercentage: 0.5,
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


function Sales() {
  return (
    <Bar data={deviceSaleData} options={deviceSaleOptions}></Bar>
  )
}

export default Sales