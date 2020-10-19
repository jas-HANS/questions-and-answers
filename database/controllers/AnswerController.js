const { Question } = require('../models/QuestionModel.js');
const formatters = require('../helpers/formatters.js');

const AnswerController = {
    getAllAnswers: (question, callback) => {
        Question.find({question_id: question.question_id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        });
    }
}

module.exports = {
    AnswerController
};