const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');

module.exports = mongoose.model('user', userSchema);
