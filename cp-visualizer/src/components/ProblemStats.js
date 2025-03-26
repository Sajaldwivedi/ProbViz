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
import { motion } from 'framer-motion';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ProblemStats({ problemData }) {
  const chartData = {
    labels: ['Acceptance Rate (%)', 'Submissions (x10k)', 'Solved (x10k)'],
    datasets: [
      {
        label: 'Problem Stats',
        data: [
          problemData.acceptanceRate,
          problemData.submissions / 10000,
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
      title: { display: true, text: `${problemData.title} Statistics` },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Value' } },
    },
  };

  return (
    <motion.div className="problem-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="problem-card">
        <h2>{problemData.title}</h2>
        <p className="difficulty">Difficulty: <span>{problemData.difficulty}</span></p>
        <p className="description">{problemData.description}</p>
        <div className="tags">
          {problemData.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="chart-container">
          <Bar data={chartData} options={options} />
        </div>
        < obstetricianiv className="test-cases">
          <h3>Sample Test Cases</h3>
          {problemData.testCases.map((test, index) => (
            <div key={index} className="test-case">
              <p><strong>Input:</strong> {test.input}</p>
              <p><strong>Output:</strong> {test.output}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProblemStats;