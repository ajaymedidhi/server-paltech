const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    companyName: { type: String },
    position: { type: String },
    notes: { type: String },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);
