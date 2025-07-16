import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import { useEffect, useState } from 'react';

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

const areaData = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [{
        label: 'Product-1',
        data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
        backgroundColor: '#2196f3',
        borderColor: '#0c83e2',
        borderWidth: 1,
        fill: true,
        datasetKeyProvider: "key1"
      },
      {
        label: 'Product-2',
        data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
        backgroundColor: '#19d895',
        borderColor: '#15b67d',
        borderWidth: 1,
        fill: true,
        datasetKeyProvider: "key2"
      }
    ]
  };


const areaOptions = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 4, 
  scales: {
    y: {
      grid: {
        color: "#F2F6F9"
      },
      beginAtZero: true,
      min: 0,
      max: 20,
      ticks: {
        stepSize: 5,
      }
    },
    x: {
      grid: {
        color: "#F2F6F9"
      },
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    point: {
      radius: 2
    },
    line: {
        tension: 0.5
    }
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }
};


function ProductAnalysis() {
  return (
    <Line data={areaData} options={areaOptions}/>
  )
}

export default ProductAnalysis