import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProblemForm from './components/ProblemForm';
import ProblemStats from './components/ProblemStats';
import './App.css';

function App() {
  const [problemData, setProblemData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <motion.header
        className="App-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} 
      >
        <h1>ProbViz</h1>
        <p>Visualize Competitive Programming Problems</p>
      </motion.header>
      <main>
        <ProblemForm
          setProblemData={setProblemData}
          setLoading={setLoading}
          setError={setError}
        />
        {loading && (
          <motion.p
            className="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading...
          </motion.p>
        )}
        {error && (
          <motion.p
            className="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.p>
        )}
        {problemData && !error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ProblemStats problemData={problemData} />
          </motion.div>
        )}
      </main>
      <footer>
        <p>Built by Sajal Dwivedi | 2025</p>
      </footer>
    </div>
  );
} 

export default App;