import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
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



const  totalTransactionChartOptions = {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  },
  elements: {
    point: {
      radius: 0
    },
    line: {
        tension: 0.5
    }
  },
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {  
      grid: {  
        display: false,
        color: '#fff'
      },
      ticks: {
        display: false,
        color: '#fff'
      },
      border: {  
        color: '#fff'
      }
    },
    y: {  
      grid: {  
        display: false,
        color: '#fff'
      },
      ticks: {
        display: false,
        color: '#fff'
      },
      border: {  
        color: '#fff'
      }
    }
  }
}





function Transaction() {

    const [transactionData, setTransactionData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(0, 100, 200, 0);
        gradientBg.addColorStop(1, '#fa3252');
        gradientBg.addColorStop(0, '#fa5539');


        const newTransactionData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: 'Sessions',
            data: [320, 280, 300, 280, 300, 270, 350],
            backgroundColor: gradientBg,
            borderColor: '#fa394e',
            borderWidth: 0,
            fill: true,
            pointBackgroundColor: "#fa394e",
            pointRadius: 7,
            pointBorderWidth: 3,
            pointBorderColor: '#fff',
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "#fa394e",
            pointHoverBorderColor: "#fa394e",
            pointHoverBorderWidth: 2,
            pointHitRadius: 7,
        }]
        };


      setTransactionData(newTransactionData)
    }, [])

    
  return (
    <div>
        {
            transactionData.datasets && (
                <Line data={transactionData} options={totalTransactionChartOptions} height={75}/>
            )
        }
    </div>
  )
}

export default Transaction