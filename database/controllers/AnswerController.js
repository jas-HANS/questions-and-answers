const { Question } = require('../models/QuestionModel.js');
const formatters = require('../helpers/formatters.js');

const AnswerController = {
    getAllAnswers: ({question_id}, {count}, callback) => {
        Question.find({"results._id": question_id}, {'results.$': true}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                data = formatters.answersFormatter(data, count);
                callback(null, data);
            }
        });
    }
}

module.exports = {
    AnswerController
};