const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  yearsOfExperience: Number,
  title: String,
  description: String,
});

const AboutModal = mongoose.model('Content', contentSchema);

module.exports = AboutModal;