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

 const realTimeStatisticsData= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Profit',
        data: [330, 380, 230, 400, 309, 530, 340],
        backgroundColor: "#0f5bff",
        borderColor: '#0f5bff',
        borderWidth: 0
      },
      {
        label: 'Target',
        data: [600, 600, 600, 600, 600, 600, 600],
        backgroundColor: '#e5e9f2',
        borderColor: '#e5e9f2',
        borderWidth: 0
      }
    ]
  };
const realTimeStatisticsOptions = {
  responsive: true,
  maintainAspectRatio: true,
  barPercentage: 0.5,

  layout: {
    padding: {
      left: 0,
      right: 25,
      top: 0,
      bottom: 0
    }
  },
  scales: {
    y: {  
      display: false,
      grid: {  
        display: false
      }
    },
    x: {  
      stacked: true,
      ticks: {
        display: false,
        beginAtZero: true,
        color: "#f3f3f3"  
      },
      grid: {  
        display: false,
        color: "#f3f3f3"
      },
      border: {  
        color: 'rgba(0,0,0,0)'  
      },
    }
  },
  plugins: {  
    legend: {
      display: false
    }
  },
  elements: {
    point: {
      radius: 0
    }
  }
};

function RealTime() {
  return (
    <Bar data={realTimeStatisticsData} options={realTimeStatisticsOptions} height={100}/>
  )
}

export default RealTime