const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['landlord', 'tenant'], required: true },
});
module.exports = mongoose.model('User', userSchema);