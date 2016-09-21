// test results are taken after this signal
// this helps to avoid parsing console.logs before the output
export const signal = '@@@CodeRoad Results@@@';

// path to test runner executable from "node_modules"
export const runnerPath = ['jest', 'bin', 'jest.js'];

// options passed in the runner command process
export const runnerOptions = [
  '--bail', // quit on first fail
  '--notify'
];
