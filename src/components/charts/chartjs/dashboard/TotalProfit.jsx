
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);


const totalProfitData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
      backgroundColor: [
        '#cfe1ff',
      ],
      borderColor: [
        '#0062ff'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

const totalProfitOptions = {
  scales: {
    y: {
      display: false, 
      ticks: {
        beginAtZero: true,
        stepSize: 10
      }
    },
    x: {
      display: false, 
      ticks: {
        beginAtZero: true,
        stepSize: 10
      }
    },
  },
  plugins: {
    legend: {
      display: false 
    }
  },
  elements: {
    point: {
      radius: 0 
    },
    line: {
      tension: 0 
    }
  }
};



function TotalProfit() {
  return (
    <Line options={totalProfitOptions} data={totalProfitData}></Line>
  )
}

export default TotalProfit