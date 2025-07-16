
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import { useState, useEffect } from 'react';

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

const salesStaticsOptions= {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  },
  elements: {
    point: {
      radius: 3
    },
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      ticks: {
        display: false,
        beginAtZero: false
      },
      grid: {
        drawBorder: false,
        color: "#f8f8f8",
        borderColor: "#f8f8f8",
      }
    },
    y: {
      ticks: {
        max: 200,
        min: 0,
        stepSize: 50,
        color: "#8b9298",
        beginAtZero: false
      },
      grid: {
        color: "#f8f8f8",
        borderColor: "#f8f8f8",
        display: true,
        drawBorder: false
      }
    }
  }
}

  const salesStaticsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Revenue',
        data: [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170],
        borderColor: '#8862e0',
        backgroundColor: 'rgba(136, 98, 224, 0.2)',
        // tension: 0.4,
        fill: true
      },
      {
        label: 'Sales',
        data: [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135],
        borderColor: '#19d895',
        backgroundColor: 'rgba(25, 216, 149, 0.2)',
        // tension: 0.4,
        fill: true
      }
    ]
  };

function SalesStatistics() {
    
  return (
    <>
        <Line data={salesStaticsData} options={salesStaticsOptions}  height={50} width={100} />               

    </>
  )
}

export default SalesStatistics