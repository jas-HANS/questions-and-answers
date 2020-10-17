const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    results: [{
        question_id: Number,
        question_body: String,
        question_date: Date,
        asker_name: String,
        question_helpfulness: Number,
        reported: Number,
        answers: {
            id: Number,
            body: String,
            date: Date,
            answerer_name: String,
            helpfulness: Number,
            photos: [{
                id: Number,
                url: String
            }]
        }
    }]
});

const Question = mongoose.model("Question", questionSchema, 'questions');

module.exports = {
    Question
}