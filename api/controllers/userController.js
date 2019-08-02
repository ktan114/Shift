const express = require('express');
const router = express.Router();

const createUser = require('../services/user/createUser');

router.post('/', async (req, res) => {
  const { email, result } = req.body;

  const response = await createUser(email, result);
  response ? res.status(200).json(response) : res.status(500).json('Error');
});

module.exports = router;
