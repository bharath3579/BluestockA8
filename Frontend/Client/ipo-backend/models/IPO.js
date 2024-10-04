const mongoose = require('mongoose');

const ipoSchema = new mongoose.Schema({
  company: { type: String, required: true },
  priceBand: { type: String, required: true },
  open: { type: Date, required: true },
  close: { type: Date, required: true },
  issueSize: { type: String, required: true },
  issueType: { type: String, required: true },
  listingDate: { type: Date, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('IPO', ipoSchema);
