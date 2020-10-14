const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/qaDatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//====================
//===== QUERIES ======
//====================

const Schema = mongoose.Schema;

// QUESTIONS

const questionSchema = new Schema({

});

const Question = mongoose.model("Question", questionSchema);

// ANSWERS

const answerSchema = new Schema({

});

const Answer = mongoose.model("Answer", answerSchema);


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    Question,
    Answer
}