const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sequenceSchema = new Schema({
    _id: Number,
    sequence_value: Number,
  })
  
  const Sequence = mongoose.model('Sequence', sequenceSchema)
  
  // used to access sequence documents for each id, so it can start 1 and count up
  const getNextSequenceValue = async (sequenceName) => {
    const sequenceDocument = await Sequence.findOneAndUpdate({_id: sequenceName },{$inc:{sequence_value:1}});
    return sequenceDocument.sequence_value;
  }

const questionSchema = new Schema({
    _id: Number,
    results: [{
        question_id: Number,
        question_body: String,
        question_date: Date,
        asker_name: String,
        question_helpfulness: Number,
        reported: Number,
        answers: [{
            id: Number,
            body: String,
            date: Date,
            answerer_name: String,
            helpfulness: Number,
            photos: [{
                id: Number,
                url: String
            }]
        }]
    }]
});

const Question = mongoose.model("Question", questionSchema, 'questions');

module.exports = {
    Question,
    getNextSequenceValue
}