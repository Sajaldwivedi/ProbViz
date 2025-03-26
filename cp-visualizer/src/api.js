import axios from 'axios';

export const getProblemData = async (problemId) => {
  try {
    const response = await axios.get('https://codeforces.com/api/problemset.problems');
    const problems = response.data.result.problems;
    const problem = problems.find(p => `${p.contestId}${p.index}`.toLowerCase() === problemId.toLowerCase());

    if (!problem) {
      return { error: 'Problem not found' };
    }

    return {
      title: problem.name,
      difficulty: 'Medium', // Codeforces doesn’t provide this directly; mock or infer
      description: 'Problem details fetched from Codeforces API (description mocked due to API limitations).',
      tags: problem.tags,
      acceptanceRate: 50, // Mock; real stats require additional API calls or scraping
      submissions: 100000,
      solved: 50000,
      testCases: [
        { input: 'Mock input (expand with scraping)', output: 'Mock output' },
      ],
    };
  } catch (err) {
    return { error: 'API request failed' };
  }
};