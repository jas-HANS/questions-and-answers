const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
});

const Answers = mongoose.model("Answer", answerSchema);


module.exports = {
    Answers
}