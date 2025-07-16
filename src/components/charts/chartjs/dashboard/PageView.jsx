import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

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

 const pageViewAnalyticData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
    datasets: [{
        label: 'This week',
        data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
        backgroundColor: [
          'rgba(216,247,234, 0.19)',
        ],
        borderColor: [
          '#3dd597'
        ],
        borderWidth: 2,
        fill: true,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#3dd597",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Current week',
        data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
        backgroundColor: [
          'rgba(216,247,234, 0.19)',
        ],
        borderColor: [
          '#3dd597'
        ],
        borderWidth: 2,
        fill: false,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#0162ff",
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ],
  };

  const pageViewAnalyticOptions = {
  scales: {
    y: { 
      display: true,
      grid: { 
        drawBorder: false,
        display: true,
        drawTicks: false,
        color: '#eef0fa',
        zeroLineColor: 'rgba(90, 113, 208, 0)' 
      },
      ticks: {
        beginAtZero: true,
        stepSize: 50,
        display: true,
        padding: 10,
      }
    },
    x: { 
      display: true,
      position: 'bottom',
      grid: { 
        drawBorder: false,
        display: false,
        drawTicks: false
      },
      ticks: {
        beginAtZero: true,
        stepSize: 10,
        color: "#a7afb7", 
        padding: 10,
      }
    }
  },
  plugins: {
    legend: {
      display: false 
    },
    tooltip: { 
      backgroundColor: 'rgba(2, 171, 254, 1)'
    }
  },
  elements: {
    point: {
      radius: 1 
    },
    line: {
      tension: 0 
    }
  }
};


function PageView() {
  return (
    <Line data={pageViewAnalyticData} options={pageViewAnalyticOptions}></Line>
  )
}

export default PageView