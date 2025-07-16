import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const netProfitData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
            label: "Sales",
            backgroundColor: 'rgba(88, 208, 222,0.8)',
            borderColor: 'rgba(88, 208, 222,0.8)',
            borderWidth: 0,
            fill: true,
            radius: 0,
            pointRadius: 0,
            pointBorderWidth: 0,
            pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
            pointHoverRadius: 10,
            pointHitRadius: 5,
            data: [54, 45, 60, 70, 54, 75, 60, 54]
          }, {
            label: "Orders",
            backgroundColor: 'rgba(150, 77, 247,1)',
            borderColor: 'rgba(150, 77, 247,1)',
            borderWidth: 0,
            fill: true,
            radius: 0,
            pointRadius: 0,
            pointBorderWidth: 0,
            pointBackgroundColor: 'rgba(150, 77, 247,1)',
            pointHoverRadius: 10,
            pointHitRadius: 5,
            data: [65, 75, 70, 80, 60, 80, 36, 60]
          }]
    };

const netProfitOptions = {
    scales: {
    r: {  // 'r' is used for radar/radial charts
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
        display: false
      },
      pointLabels: {
        font: {
          size: 14
        },
        color: "#6c757c"
      },
      grid: {
        color: "#f3f3f3"
      },
      angleLines: {
        color: "#f3f3f3"
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

function NetProfit() {
  return (
    <Radar data={netProfitData} options={netProfitOptions} height={280}/>
  )
}

export default NetProfit