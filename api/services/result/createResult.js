const Result = require('../../models/Result');

const createResult = async result => {
  const createdResult = {};
  createdResult.result = result;
  const newResult = await new Result(createdResult);

  const response = await newResult.save();

  return response;
};

module.exports = createResult;
