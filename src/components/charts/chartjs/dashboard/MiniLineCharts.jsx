
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


const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
        y: {
            display: false,
            ticks: {
                stepSize: 100  
            },
             clip: true
        },
        x: { 
            display: false,
            ticks: {
                stepSize: 100  
            },
            
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
    clip: true,
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: 0
        }
    },
        resizeDelay: 0,
        onResize: (chart, size) => {
            if (size.width > 250) {  
                chart.resize(100, 150 / chart.aspectRatio);
            }
    }
}


function VisitsMini() {
  
    const [visitData, setVisitData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(0, 0, 0, 181)
        gradientBg.addColorStop(1, 'rgba(110,123,247,0.7)');
        gradientBg.addColorStop(0, 'rgba(255,255,255,0)');


      const newVisitData = {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
            datasets: [{
            label: 'Profit',
            data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
            borderColor: '#6d7cfc',
            backgroundColor: gradientBg,
            borderWidth: 3,
            fill: true
            }]
        };


      setVisitData(newVisitData)
    }, [])

    
  return (
    <div>
        {
            visitData.datasets && (
                <Line data={visitData} options={options}/>
            )
        }
    </div>
  )
}


function Impressions() {
    
    const [ImpressionsData, setImpressionsData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(0, 0, 0, 181);
        gradientBg.addColorStop(1, 'rgba(110, 123, 247, 0.7)');
        gradientBg.addColorStop(0, 'rgba(255,255,255,0)');


        const newImpressionsData = {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
            datasets: [{
                label: 'Profit',
                data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
                borderColor: '#6d7cfc',
                backgroundColor: gradientBg,
                borderWidth: 3,
                fill: true
            }]
        };

        setImpressionsData(newImpressionsData)
    }, [])

    return (
        <div>
            {
                ImpressionsData.datasets && (
                    <Line data={ImpressionsData} options={options} />
                )            }
        </div>
    )
}

function Conversion() {
    
    const [conversionData, setConversionData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(0, 0, 0, 181);
        gradientBg.addColorStop(1, 'rgba(110, 123, 247, 0.7)');
        gradientBg.addColorStop(0, 'rgba(255,255,255,0)');


        const newConversionData = {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
            datasets: [{
                label: 'Profit',
                data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
                borderColor: '#6d7cfc',
                backgroundColor: gradientBg,
                borderWidth: 3,
                fill: true
            }]
        };

        setConversionData(newConversionData)
    }, [])

    return (
        <div>
            {
                conversionData.datasets && (
                    <Line data={conversionData} options={options} />
                )            }
        </div>
    )
}

function Downloads() {
    
    const [downloadsData, setDownloadsData] = useState({});

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');


        const gradientBg = ctx.createLinearGradient(0, 0, 0, 181);
        gradientBg.addColorStop(1, 'rgba(110, 123, 247, 0.7)');
        gradientBg.addColorStop(0, 'rgba(255,255,255,0)');


        const newDownloadsData = {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
            datasets: [{
                label: 'Profit',
                data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
                borderColor: '#6d7cfc',
                backgroundColor: gradientBg,
                borderWidth: 3,
                fill: true
            }]
        };

        setDownloadsData(newDownloadsData)
    }, [])

    return (
        <div>
            {
                downloadsData.datasets && (
                    <Line data={downloadsData} options={options} />
                )            }
        </div>
    )
}

export {
  VisitsMini,
  Impressions,
  Conversion,
  Downloads
  
}