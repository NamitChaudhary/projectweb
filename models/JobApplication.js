const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  currentPackage: { type: Number, required: true },
  totalExperience: { type: Number, required: true },
  coverLetter: { type: String, required: true },
  noticePeriod: { type: Number, required: true },
  resume: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
