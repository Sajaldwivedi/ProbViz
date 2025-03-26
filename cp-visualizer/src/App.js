import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import ProblemForm from './components/ProblemForm';
import ProblemStats from './components/ProblemStats';
import HistorySidebar from './components/HistorySidebar';
import './App.css';

function App() {
  const [problemData, setProblemData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('problemHistory')) || []);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const updateHistory = (data) => {
    const newHistory = [data, ...history.filter(p => p.title !== data.title)].slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem('problemHistory', JSON.stringify(newHistory));
  };

  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <motion.header
          className="App-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>ProbViz</h1>
          <p>Visualize Competitive Programming Problems</p>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </motion.header>
        <div className="content-wrapper">
          <HistorySidebar history={history} setProblemData={setProblemData} />
          <main>
            <ProblemForm
              setProblemData={setProblemData}
              setLoading={setLoading}
              setError={setError}
              updateHistory={updateHistory}
            />
            {loading && (
              <motion.div
                className="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="spinner" />
                <p>Loading...</p>
              </motion.div>
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
        </div>
        <footer>
          <p>Built by Sajal Dwivedi | March 26, 2025</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;