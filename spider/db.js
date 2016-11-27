const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/spider-demo');

let NovelSchema = new mongoose.Schema({
    name: String,
    url: String
});


exports.NovelModel = mongoose.model('Novel', NovelSchema);