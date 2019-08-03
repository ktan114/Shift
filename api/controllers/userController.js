const express = require('express');
const router = express.Router();

const userService = require('../services/user');

router.post('/', async (req, res) => {
  const { email, answers } = req.body;

  const response = await userService.createUser(email, answers);
  response ? res.status(200).json(response) : res.status(500).json('Error');
});

module.exports = router;
