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
        Question.update(
            { "results._id": id },
            { $push: { "results.0.answers": body } },
            (err, data) => {
                if (err) {
                    callback(err, null)
                } else {
                    callback(null, data)
                }
            });
    },
    markAnsAsHelpful: (answerId, callback) => {
        Question.update(
            { "results.answers._id": answerId },
            { $inc: { "results.$.answers.$[i].helpfulness": 1 } },
            {
                arrayFilters: [{"i._id": answerId}]
            },
            (err, data) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data);
                }
            }
        );
    },
    reportAnswer: (answerId, callback) => {
        Question.update(
            { "results.answers._id": answerId },
            { $inc: { "results.$.answers.$[i].reported": 1 } },
            (err, data) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data);
                }
            }
        );
    }
}

module.exports = {
    AnswerController
};