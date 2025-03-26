import React, { useState } from 'react';
import { getProblemData } from '../mockData';

function ProblemForm({ setProblemData, setLoading, setError }) {
  const [problemId, setProblemId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!problemId) {
      setError('Please enter a problem ID');
      return;
    }

    setLoading(true);
    setError('');
    setProblemData(null);

    try {
      const data = await getProblemData(problemId.toLowerCase());
      if (data.error) {
        setError(data.error);
      } else {
        setProblemData(data);
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="problem-form">
      <input
        type="text"
        value={problemId}
        onChange={(e) => setProblemId(e.target.value)}
        placeholder="Enter problem ID (e.g., 'two-sum' or '1020A')"
        className="problem-input"
      />
      <button type="submit" className="submit-btn">
        Visualize
      </button>
    </form>
  );
}

export default ProblemForm;