import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AnswerList from './AnswerList.jsx';
import HelpfulBtn from './HelpfulBtn.jsx';

const Question = ({question, isHelpfulA, isHelpfulQ, getId}) => {
  return (
    <div>
      <Row className="question">Q:
        <Col>{question.question_body}</Col>
        <Col md="auto">
          <HelpfulBtn
            className="q-btn"
            id={question.question_id}
            currentCount={question.question_helpfulness}
            clickFunc={isHelpfulQ}/>
          <Alert.Link
            className="add-answer"
            variant="dark"
            size="sm"
          //  onClick={()=>setAnswer()}
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
