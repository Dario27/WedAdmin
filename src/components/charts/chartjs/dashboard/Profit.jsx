import { useState, useEffect, useRef} from 'react'
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

const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
    datasets: [{
        label: 'Profit',
        data: [4,3,10,9,4,3,8,6,7,8],
        backgroundColor: [
            '#ffff',
        ],
        borderColor: [
            '#ffff',
        ],
        borderWidth: 2,
        fill: true
    }]
}


const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            display: false,
            ticks: {
                beginAtZero: false
            }
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
    stepSize: 10,
    categoryPercentage: 0.5,
    // barPercentage: 0.5,
};

function Profit() {
  return (
    <Bar data={data} options={options}/>
  )
}

export default Profit