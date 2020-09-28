import React from 'react';
import {Row, Col, Alert} from 'react-bootstrap';
import AnswerList from './AnswerList.jsx';
import HelpfulBtn from './HelpfulBtn.jsx';

const Question = ({question, isHelpfulA, isHelpfulQ}) => {
  return (
    <div>
      <Row className="question">Q:
        <Col>{question.question_body}</Col>
        <Col md="auto">
          <HelpfulBtn
            id={question.question_id}
            currentCount={question.question_helpfulness}
            clickFunc={isHelpfulQ}/>
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
            isHelpfulA={isHelpfulA}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Question;
