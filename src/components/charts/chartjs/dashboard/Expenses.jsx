
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

 const totalExpensesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
      backgroundColor: [
        '#e1fff3',
      ],
      borderColor: [
        '#3dd597'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

 const totalExpensesOptions = {
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
          display: false,
        },
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };

function Expenses() {
  return (
    <Line data={totalExpensesData} options={totalExpensesOptions}></Line>
  )
}

export default Expenses