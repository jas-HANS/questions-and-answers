const { Answer } = require('../models/AnswerModel.js');

const AnswerController = {
    getAllAnswers: (question, callback) => {
        Answer.find({question_id: question.question_id}, (err, data) => {
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