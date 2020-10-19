const { Question } = require('../models/QuestionModel.js');
const formatters = require('../helpers/formatters.js');

const AnswerController = {
    getAllAnswers: (question, callback) => {
        Question.find({"results._id": question}, {'results.$': true}, (err, data) => {
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