import React from 'react';
import { motion } from 'framer-motion';

function HistorySidebar({ history, setProblemData }) {
  return (
    <motion.aside
      className="history-sidebar"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Recent Searches</h3>
      {history.length > 0 ? (
        <ul>
          {history.map((item, index) => (
            <li
              key={index}
              onClick={() => setProblemData(item)}
              className="history-item"
            >
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No history yet</p>
      )}
    </motion.aside>
  );
}

export default HistorySidebar;