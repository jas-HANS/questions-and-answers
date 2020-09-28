import React from 'react';
import {Row, Col, Alert} from 'react-bootstrap';
import AnswerList from './AnswerList.jsx';
import HelpfulBtn from './HelpfulBtn.jsx';

const Question = ({question}) => {
  return (
    <div>
      <Row className="question">Q:
        <Col>{question.question_body}</Col>
        <Col md="auto" id="question-data">
          <HelpfulBtn id="question-btn"/>
          <Alert.Link
            className="add-answer"
            variant="dark"
            size="sm"
          //  onClick={() => setCount(count + 1)}
          >Add Answer
          </Alert.Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <AnswerList
          // array of answers
            answers={Object.values(question.answers)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Question;
