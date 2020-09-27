import React from 'react';
import {Row, Col, Alert} from 'react-bootstrap';
import AnswerList from './AnswerList.jsx';
import HelpfulBtn from './HelpfulBtn.jsx';

const Question = ({question}) => {
  return (
    <div className="question">
      <Row>
        <Col>Q: {question.question_body}</Col>
        <Col md="auto">
          <HelpfulBtn/>
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
          // array of answers of x Q
            answers={Object.values(question.answers)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Question;
