const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/qaDatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//==========================================
//============== QUERIES ===================
//==========================================

const Schema = mongoose.Schema;

//===================
//==== QUESTIONS ====
//===================

const questionSchema = new Schema({
    product_id: Number,
    results: [{
        question_id: Number,
        question_body: String,
        question_date: Date,
        asker_name: String,
        question_helpfulness: Number,
        reported: Number,
        answers: {
            type: Schema.Types.ObjectId,
            ref: 'Answers'
        }
    }]
});

const Questions = mongoose.model("Question", questionSchema);

//===================
//===== ANSWERS =====
//===================

const answerSchema = new Schema({
});

const Answers = mongoose.model("Answer", answerSchema);


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    Questions,
    Answers,
    /*     addQuestion,
        markQAsHelpful,
        reportQuestion,
        addAnswer,
        markAnsAsHelpful,
        reportAnswer */
}