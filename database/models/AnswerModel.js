const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    answer_id: Number,
    body: String,
    date: Date,
    answerer_name: String,
    helpfulness: Number,
    photos: [{
        id: Number,
        url: String
    }],
});

const Answers = mongoose.model("Answers", answerSchema);


module.exports = {
    Answers
}