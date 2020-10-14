const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question_id: Number,
    question_body: String,
    question_date: Date,
    asker_name: String,
    question_helpfulness: Number,
    reported: Number,
    answers: {
        type: Schema.Types.ObjectId,
        ref: 'Answers'
    }
});

const Questions = mongoose.model("Questions", questionSchema);

module.exports = {
    Questions
}