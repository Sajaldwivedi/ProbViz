import React, { useState } from 'react';
import ProblemForm from './components/ProblemForm';
import ProblemStats from './components/ProblemStats';
import './App.css';

function App() {
  const [problemData, setProblemData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Competitive Programming Visualizer</h1>
        <p>Explore problem stats from LeetCode and Codeforces</p>
      </header>
      <main>
        <ProblemForm
          setProblemData={setProblemData}
          setLoading={setLoading}
          setError={setError}
        />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {problemData && !error && <ProblemStats problemData={problemData} />}
      </main>
      <footer>
        <p>Built by Sajal Dwivedi | March 26, 2025</p>
      </footer>
    </div>
  );
}

export default App;