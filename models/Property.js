const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
  address: String,
  description: String,
  landlord: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});
module.exports = mongoose.model('Property', propertySchema);