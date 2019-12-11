const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    number:Number,
    password:String
});

module.exports = mongoose.model('user',user);