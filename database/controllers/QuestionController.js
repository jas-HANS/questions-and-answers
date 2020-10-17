const { Question } = require('../models/QuestionModel.js');

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
        Question.update(
            { _id: id },
            { $push: { results: { question_id: 2 } } },
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
    QuestionController
};