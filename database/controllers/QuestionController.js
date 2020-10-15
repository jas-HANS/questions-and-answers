const { Question } = require('../models/QuestionModel.js');

const QuestionController = {
    getAllQuestions: (product, callback) => {
        console.log(product);
        Question.find({product_id: product.product_id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                console.log('Data from model', data);
                callback(null, data);
            }
        });
    }
}

module.exports = {
    QuestionController
};