const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    question: Number,
    page: Number,
    count: Number,
    results: {
        answer_id: Number,
        body: String,
        date: Date,
        answerer_name: String,
        helpfulness: Number,
        photos: [{
            id: Number,
            url: String
        }],
    }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = {
    Answer
}