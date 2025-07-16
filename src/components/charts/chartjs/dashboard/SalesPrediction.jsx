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

const saleOptions = {
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

function SalesPrediction() {

    const [salePredictionData, setSalePredictionData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg1 = ctx.createLinearGradient(0, 0, 0, 181);
        gradientBg1.addColorStop(0, 'rgba(164,97,216, 1)');
        gradientBg1.addColorStop(1, 'rgba(255, 255, 255, 0.27)');


        const newSalesPredictionData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: 'Margin',
            data: [5, 10, 6, 12, 7, 14, 16],
            backgroundColor: gradientBg1,
            borderColor: [
            "#a461d8"
            ],
            borderWidth: 3,
            fill: true,
        }],
    };

      setSalePredictionData(newSalesPredictionData)
    }, [])

    
  return (
    <div>
        {
            salePredictionData.datasets && (
                <Line data={salePredictionData} options={saleOptions}/>
            )
        }
    </div>
  )
}

function SalesPrediction2() {

    const [salePredictionData2, setSalePredictionData2] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg1 = ctx.createLinearGradient(0, 0, 0, 181);
        gradientBg1.addColorStop(0, 'rgba(164,97,216, 1)');
        gradientBg1.addColorStop(1, 'rgba(255, 255, 255, 0.27)');


        const newSalesPredictionData2 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: 'Margin',
            data: [16, 14, 7, 12, 6, 10, 5],
            backgroundColor: gradientBg1,
            borderColor: [
            "#a461d8"
            ],
            borderWidth: 3,
            fill: true,
        }],
    };

      setSalePredictionData2(newSalesPredictionData2)
    }, [])

    
  return (
    <div>
        {
            salePredictionData2.datasets && (
                <Line data={salePredictionData2} options={saleOptions}/>
            )
        }
    </div>
  )
}

export {
    SalesPrediction,
    SalesPrediction2
}
