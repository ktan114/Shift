const User = require('../../models/User');
const createResult = require('../result/createResult');

const createUser = async (email, answers) => {
  if (!email || !answers) return null;
  const resultId = await createResult(answers);
  const user = {
    email,
    result: resultId,
  };

  const newUser = new User(user);
  const response = newUser.save();
  return response;
};

module.exports = createUser;
