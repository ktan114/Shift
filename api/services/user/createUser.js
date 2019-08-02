const User = require('../../models/User');
const createResult = require('../result/createResult');

const createUser = async (email, result) => {
  if (!email || !result) return null;
  const resultId = await createResult(result);
  const user = {
    email,
    result: resultId,
  };

  const newUser = new User(user);
  const response = newUser.save();
  return response;
};

module.exports = createUser;
