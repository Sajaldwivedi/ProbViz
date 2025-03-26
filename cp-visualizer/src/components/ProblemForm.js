import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.form
      onSubmit={handleSubmit}
      className="problem-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        value={problemId}
        onChange={(e) => setProblemId(e.target.value)}
        placeholder="Enter problem ID (e.g., 'two-sum' or '1020A')"
        className="problem-input"
      />
      <motion.button
        type="submit"
        className="submit-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Visualize
      </motion.button>
    </motion.form>
  );
}

export default ProblemForm;