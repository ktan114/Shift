const User = require('../../models/User');

const createUser = async (email, result) => {
  const user = {
    email,
    result,
  };

  const newUser = new User(user);
  const response = await newUser.save();

  return response ? 'Success' : 'Error';
};

module.exports = createUser;
