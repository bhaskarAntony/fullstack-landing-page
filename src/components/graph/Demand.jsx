import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Demand = ({ datas }) => {
    const years = Object.keys(datas.demand); // ['2016', '2017', ...]
    const demandPercentages = years.map(year => datas.demand[year]);

    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Demand Percentage',
                data: demandPercentages,
                fill: false,
                borderColor: '#161D6F',
                tension: 0.1, // Curve of the line
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Year-wise Demand Percentage (Line Chart)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Demand (%)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Years',
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default Demand;
