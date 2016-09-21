const { run }  = require('../lib');
const { resolve } = require('path');

const dir = resolve(__dirname, 'examples', 'code');
const taskPosition = 0;
const handleResult = (res) => {
  console.log(res);
}

const runTest = (file) => {
  const testPath = resolve(__dirname, 'test', file);
  run({ dir, taskPosition, handleResult, testPath });
};

describe('basic', () => {

  it('should handle all passing test', () => {
    runTest('basic.js');
  });

});