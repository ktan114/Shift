const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResultSchema = new Schema({
  answers: [
    {
      type: String,
      response: Number,
    },
  ],
});

module.exports = mongoose.model('Result', ResultSchema);
