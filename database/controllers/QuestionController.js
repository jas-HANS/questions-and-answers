const { Question } = require('../models/QuestionModel.js');

const QuestionController = {
    getAllQuestions: (product, callback) => {
        Question.find({product_id: product.product_id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        }).populate('results');
    }
}

module.exports = {
    QuestionController
};