import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({data}) => {
  // Fullstack Developer Salary Data (example values for demonstration)
  const salaryData = {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Salary (in USD)",
        data: [60000, 62000, 64000, 66000, 69000, 71000, 74000, 78000, 80000, 85000, 90000, 95000, 100000], // Example salaries over the years
        backgroundColor: "#161D6F", // Bar color
        borderColor: "rgba(153, 102, 255, 1)", // Bar border color
        borderWidth: 1,
      },
    ],
  };

  // Options for chart configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows you to define custom height and width
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Fullstack Developer Salaries (2012-2024)",
      },
    },
    indexAxis: 'y', // This switches the chart to have the Y axis as the labels
    scales: {
      x: {
        beginAtZero: true, // Ensure the X-axis starts at 0 (for salary)
        title: {
          display: true,
          text: 'Salary (in USD)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "350px", marginBottom:"100px" }}> {/* Set fixed height and width */}
      <h5 className="fs-5 fw-bold mb-4">{data} Developer Salaries (2012-2024)</h5>
      <Bar data={salaryData} options={options} />
    </div>
  );
};

export default Graph;
