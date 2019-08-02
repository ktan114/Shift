const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResultSchema = new Schema({
  result: [
    {
      name: String,
      response: Number,
    },
  ],
});

module.exports = mongoose.model('Result', ResultSchema);
