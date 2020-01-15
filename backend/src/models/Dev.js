const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // o [] indica que haverá uma ou mais strings
});

module.exports = mongoose.model('Dev', DevSchema);