import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalaryBarChart = ({ datas }) => {
    // Calculate the average salary for each year
    const years = Object.keys(datas.salary); // ['2016', '2017', '2018', ...]
    const averageSalaries = years.map(year => {
        const salaries = datas.salary[year];
        const totalSalary = salaries.reduce((acc, salary) => acc + salary, 0);
        return totalSalary / salaries.length; // Average salary for each year
    });

    // Prepare chart data
    const chartData = {
        labels: years, // Display years on x-axis
        datasets: [
            {
                label: 'Average Salary',
                data: averageSalaries, // Average salary data for each year
                backgroundColor: '#161D6F',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Year-wise Average Salaries',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Salary in USD',
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

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default SalaryBarChart;
