const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResultSchema = new Schema({
  answers: [
    {
      number: Number,
      name: String,
      response: Number,
    },
  ],
  result: String,
});

module.exports = mongoose.model('Result', ResultSchema);
