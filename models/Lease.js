const mongoose = require('mongoose');
const leaseSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: Date,
  endDate: Date,
  rent: Number,
  payments: [{ date: Date, amount: Number }],
});
module.exports = mongoose.model('Lease', leaseSchema);