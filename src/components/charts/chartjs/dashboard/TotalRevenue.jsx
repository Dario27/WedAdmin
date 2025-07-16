import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

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


 const totalRevenueData = {
    labels: [
      "Day01","Day02","Day03","Day04","Day05","Day06","Day07","Day08","Day09","Day10","Day11","Day12","Day13","Day14","Day15","Day16","Day17","Day18","Day19","Day20","Day21","Day22","Day23","Day24","Day25","Day26","Day27","Day28","Day29","Day30","Day31","Day32","Day33","Day34","Day35","Day36","Day37","Day38","Day39","Day40","Day41","Day42","Day43","Day44","Day45","Day46","Day47","Day48","Day49","Day50","Day51","Day52","Day53","Day54","Day55","Day56","Day57","Day58","Day59","Day60","Day61","Day62","Day63","Day64","Day65","Day66","Day67","Day68","Day69","Day70","Day71","Day72","Day73","Day74","Day75","Day76","Day77","Day78","Day79","Day80","Day81","Day82"
    ],
    datasets: [{
      label: 'Total Revenue',
      data: [56,
        55,59,59,59,57,56,57,54,56,58,57,59,58,59,57,55,56,54,52,49,48,50,50,46,45,49,50,52,53,52,55,54,53,56,55,56,55,54,55,57,58,56,55,56,57,58,59,58,57,55,53,52,55,57,55,54,52,55,57,56,57,58,59,58,59,57,56,55,57,58,59,60,62,60,59,58,57,56,57,56,58,59
      ],
      borderColor: '#9B86F1',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderWidth: 3,
      fill: 'origin'
    }]
  };

const totalRevenueOptions= {
    responsive:true,
    maintainAspectRatio: true,
    aspectRatio: 4,
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    },
    plugins: {
        legend: {
          display: false
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
    stepSize: 100,
    resizeDelay: 0,
    // onResize: (chart, size) => {
    //     if (size.width > 500) {  
    //         chart.resize(200, 50 / chart.aspectRatio);
    //     }
    // }
  };

function TotalRevenue() {
  return (
    <Line data={totalRevenueData} options={totalRevenueOptions} height={75}/>
  )
}

export default TotalRevenue