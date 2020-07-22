const mongoose = require('../db/connection');

const photoSchema = new mongoose.Schema({
    image: {type: String, required: true},
    takenBy: {type: String, required: false},
    caption: {type: String, required: false},
    date: {type: Date, default: Date.now}
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;