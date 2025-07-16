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


const marketingOverviewData= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [{
        label: 'OVERDUE',
        data:[145, 238, 148, 293, 242, 235, 256, 334],
        backgroundColor: '#826af9',
        borderColor: '#826af9',
        borderWidth: 0
      }, {
        label: 'SNOOZED',
        data: [330, 380, 230, 400, 309, 430, 340, 310],
        borderColor: '#9e86ff',
        borderWidth: 0
      },
      {
        label: 'COMPLETED',
        data: [375, 440, 284, 450, 386, 480, 400, 365],
        backgroundColor: '#d0aeff',
        borderColor: '#d0aeff',
        borderWidth: 0
      },
      {
        label: 'PENDING',
        data: [425, 480, 324, 490, 426, 520, 440, 405],
        backgroundColor: '#f7d2ff',
        borderColor: '#f7d2ff',
        borderWidth: 0
      }
    ]
  };


 const marketingOverviewOptions = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0
    }
  },
  scales: {
    y: {  
      ticks: {
        max: 400,
        display: true,
        beginAtZero: true,
        color: "#b9b8b8",  
        stepSize: 100
      },
      grid: {  
        display: false,
        color: "#dde4eb"
      },
      border: {  
        color: "#dde4eb"
      }
    },
    x: {  
      stacked: true,
      ticks: {
        beginAtZero: true,
        color: "#b9b8b8"  
      },
      grid: {  
        display: true,
        color: "#dde4eb"
      },
      border: {  
        color: "#dde4eb"
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
  },
    barPercentage: 0.2

};

function MarketOverview() {
  return (
    <Bar data={marketingOverviewData} options={marketingOverviewOptions} height={100}/>
  )
}

export default MarketOverview