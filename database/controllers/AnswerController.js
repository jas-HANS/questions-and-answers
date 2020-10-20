const { Question } = require('../models/QuestionModel.js');
const formatters = require('../helpers/formatters.js');

const AnswerController = {
    getAllAnswers: ({question_id}, {count}, callback) => {
        Question.find({"results._id": question_id}, {'results.$': true}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                data = formatters.answerResponseFormatter(data, count);
                callback(null, data);
            }
        });
    },
    create: (id, body, callback) => {
        body = formatters.answerFormatter(body);
        console.log(id);
        Question.updateMany(
            { "results._id": id },
            { $push: { "results.0.answers": body } },
            (err, data) => {
                if (err) {
                    callback(err, null)
                } else {
                    callback(null, data)
                }
            });
    }
}

module.exports = {
    AnswerController
};