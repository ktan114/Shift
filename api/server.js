const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const userController = require('./controllers/userController');

const server = express();

mongoose
  .connect('mongodb://localhost:27017/shift', { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch(() => console.log('Error connecting to DB'));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(helmet());

server.use('/api/user', userController);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Connected on port: ${port}`));
