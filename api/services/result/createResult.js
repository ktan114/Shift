const Result = require('../../models/Result');
const deriveMBTI = require('../helper/deriveMBTI');

const createResult = async answers => {
  const createdResult = {};
  const result = deriveMBTI(answers);
  createdResult.answers = answers;
  createdResult.result = result;
  const newResult = await new Result(createdResult);

  const response = await newResult.save();

  return response;
};

module.exports = createResult;
