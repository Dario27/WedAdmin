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

const stockOption = {
  scales: {
    y: { 
      display: false,
      grid: { 
        drawBorder: false,
        display: false,
        drawTicks: false
      },
      ticks: {
        beginAtZero: true,
        stepSize: 10
      }
    },
    x: { 
      display: false,
      position: 'bottom',
      grid: { 
        drawBorder: false,
        display: false,
        drawTicks: false
      },
      ticks: {
        beginAtZero: true,
        stepSize: 10
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
      radius: 0
    },
    line: {
      tension: 0.4 
    }
  }
};

function StockHistory() {
  
    const [stockHistoryData, setStockHistoryData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(25, 0, 25, 80)
        gradientBg.addColorStop(0, '#0062ff');
        gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.27)');


        const newStockHistoryData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: 'Margin',
          data: [3, 4, 2, 3, 1, 2, 3],
          backgroundColor: gradientBg,
          borderColor: [
            '#0062ff'
          ],
          borderWidth: 3,
          fill: true,
        }],
      };


      setStockHistoryData(newStockHistoryData)
    }, [])

    
  return (
    <div>
        {
            stockHistoryData.datasets && (
                <Line data={stockHistoryData} options={stockOption}/>
            )
        }
    </div>
  )
}

function StockHistory2() {
  
    const [stockHistoryData2, setStockHistoryData2] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(25, 0, 25, 80)
        gradientBg.addColorStop(0, '#0062ff');
        gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.27)');


        const newStockHistoryData2 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: 'Margin',
          data: [3, 2, 1, 3, 2, 4, 3],
          backgroundColor: gradientBg,
          borderColor: [
            '#0062ff'
          ],
          borderWidth: 3,
          fill: true,
        }],
      };


      setStockHistoryData2(newStockHistoryData2)
    }, [])

    
  return (
    <div>
        {
            stockHistoryData2.datasets && (
                <Line data={stockHistoryData2} options={stockOption}/>
            )
        }
    </div>
  )
}

export {
  StockHistory,
  StockHistory2
}