import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ProblemStats({ problemData }) {
  const chartData = {
    labels: ['Acceptance Rate', 'Submissions', 'Solved'],
    datasets: [
      {
        label: 'Problem Stats',
        data: [
          problemData.acceptanceRate,
          problemData.submissions / 10000, // Scale down for chart readability
          problemData.solved / 10000,
        ],
        backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'],
        borderColor: ['#2A8BCF', '#E55773', '#3DA0A0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: `${problemData.title} Stats` },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Value' } },
    },
  };

  return (
    <div className="problem-stats">
      <h2>{problemData.title}</h2>
      <p>Difficulty: {problemData.difficulty}</p>
      <div className="chart-container">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

export default ProblemStats;