const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  result: {
    type: ObjectId,
    ref: 'Result',
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
