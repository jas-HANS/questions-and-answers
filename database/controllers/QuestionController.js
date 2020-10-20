const { Question } = require('../models/QuestionModel.js');
const formatters = require('../helpers/formatters.js');

const QuestionController = {
    getAllQuestions: (product, callback) => {
        const id = product.product_id;
        Question.find({ "_id": id }, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        });
    },
    create: (id, body, callback) => {
        body = formatters.questionFormatter(body);
        console.log(body);
        Question.update(
            { "_id": id },
            { $push: { "results": body } },
            (err, data) => {
                if (err) {
                    callback(err, null)
                } else {
                    callback(null, data)
                }
            });
    },
    markQAsHelpful: (questionId, callback) => {
        Question.update(
            { "results._id": questionId },
            { $inc: { "results.0.question_helpfulness": 1 } },
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
    QuestionController
};