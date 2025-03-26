export const getProblemData = (problemId) => {
    const mockProblems = {
      'two-sum': {
        title: 'Two Sum',
        difficulty: 'Easy',
        acceptanceRate: 45.6,
        submissions: 1200000,
        solved: 547200,
      },
      '1020A': {
        title: 'Codeforces 1020A - New Building',
        difficulty: 'Medium',
        acceptanceRate: 62.3,
        submissions: 85000,
        solved: 52955,
      },
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProblems[problemId] || { error: 'Problem not found' });
      }, 500); // Simulate network delay
    });
  };