export const getProblemData = (problemId) => {
    const mockProblems = {
      'two-sum': {
        title: 'Two Sum',
        difficulty: 'Easy',
        description:
          'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        tags: ['Array', 'Hash Table'],
        acceptanceRate: 45.6,
        submissions: 1200000,
        solved: 547200,
        testCases: [
          { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
          { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
        ],
      },
      '1020a': {
        title: 'New Building for SIS',
        difficulty: 'Medium',
        description:
          'You are given a building with n floors and k rooms on each floor. Find the shortest path between two rooms.',
        tags: ['Math', 'Greedy'],
        acceptanceRate: 62.3,
        submissions: 85000,
        solved: 52955,
        testCases: [
          { input: 'n = 3, k = 2, a = 1, b = 2', output: '1' },
          { input: 'n = 5, k = 3, a = 2, b = 5', output: '3' },
        ],
      },
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProblems[problemId.toLowerCase()] || { error: 'Problem not found' });
      }, 500);
    });
  };