const { run }  = require('../lib');
const { resolve } = require('path');

const dir = resolve(__dirname, 'examples', 'code');
const taskPosition = 0;
const handleResult = (res) => {
  console.log(res);
}

const runTest = (testPath) => run({ dir, taskPosition, handleResult, testPath: resolve(__dirname, test, testPath) });

describe('basic', () => {

  it('should handle all passing test', () => {
    runTest('basic.js');
  });

});