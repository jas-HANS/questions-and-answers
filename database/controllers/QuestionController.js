const { Question } = require('../models/QuestionModel.js');

const QuestionController = {
    getAllQuestions: (product, callback) => {
        const id = product.product_id;
        Question.find({product_id: id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        });
    },
    create: (id, body, callback) => {
        const newQuestion = new Question();
        newQuestion.save({product_id: id, results: body}, (err, data) => {
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