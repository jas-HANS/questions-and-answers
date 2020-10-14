const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const { Questions } = require('../database/queries.js');
const jsonParser = bodyParser.json();

app.use(express.static('../client/dist'));

//==========================
//=====QUESTION ROUTES======
//==========================

app.get('/qa/:product_id', (req, res) => {
  Questions.find({product_id: req.params.product_id}, (err, data) => {
    if (err) {
      console.log('😅 There was an error getting the questions for this product');
      res.send();
    } else {
      console.log("Here're the questions you asked for");
      res.status(200).send(data);
    }
  });
});

/* app.post('/qa/:product_id', (req, res) => {
  queries.addQuestion(req.params.product_id, (err, data) => {
    if (err) {
      console.log('There was an error adding a question');
      res.send();
    } else {
      console.log('Question posted');
      res.status(201).send(data);
    }
  });
});

app.put('/qa/question/:question_id/helpful', (req, res) => {
  queries.markQAsHelpful(req.params.question_id, (err, data) => {
    if (err) {
      console.log('There was an error marking this question as helpful');
      res.send();
    } else {
      console.log('Question marked as helpful');
      res.status(204).send(data);
    }
  });
});

app.put('/qa/question/:question_id/report', (req, res) => {
  queries.reportQuestion(req.params.question_id, (err, data) => {
    if (err) {
      console.log('There was an error reporting this question');
      res.send();
    } else {
      console.log('Question reported');
      res.status(204).send(data);
    }
  });
});

//==========================
//======ANSWER ROUTES=======
//==========================

app.get('/qa/:question_id/answers', (req, res) => {
  queries.Answers(req.params.question_id, (err, data) => {
    if (err) {
      console.log('😅 There was an error getting the answers for this question');
      res.send();
    } else {
      console.log("Here're the answers you asked for");
      res.status(200).send(data);
    }
  });
});

app.post('/qa/:question_id/answers', (req, res) => {
  queries.addAnswer(req.params.question_id, (err, data) => {
    if (err) {
      console.log('There was an error adding a answer');
      res.send();
    } else {
      console.log('Answer posted');
      res.status(201).send(data);
    }
  });
});

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  queries.markAnsAsHelpful(req.params.question_id, (err, data) => {
    if (err) {
      console.log('There was an error marking this answer as helpful');
      res.send();
    } else {
      console.log('answer marked as helpful');
      res.status(204).send(data);
    }
  });
});

app.put('/qa/answer/:answer_id/report', (req, res) => {
  queries.reportAnswer(req.params.question_id, (err, data) => {
    if (err) {
      console.log('There was an error reporting this answer');
      res.send();
    } else {
      console.log('answer reported');
      res.status(204).send(data);
    }
  });
});
 */

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});
