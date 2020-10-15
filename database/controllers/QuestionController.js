const { Questions } = require('../models/QuestionModel.js');

const QuestionController = {
    getAllAnswers: (question, callback) => {
        Questions.find({question_id: question.question_id}, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        }).populate('answers');
    }
}

module.exports = {
    QuestionController
};