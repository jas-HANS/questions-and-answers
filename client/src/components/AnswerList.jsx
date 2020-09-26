import React from 'react';
import HelpfulBtn from './HelpfulBtn.jsx';
import {Col, Row, Card} from 'react-bootstrap'

const AnswerList = ({answers}) => {
  let mappedList = answers.map((answer, i) => (
    <div>
      <p>A: {answer.body}</p>
      <Row className="answerDiv">
        <Col sm>
          <span>by: {answer.answerer_name}</span>
        </Col>
        <Col sm>
          <span>{answer.date} </span>
        </Col>
        <Col xs>
          <div><HelpfulBtn /></div>
        </Col>
      </Row>
    </div>
     )
    );

  return (
    <div>
      {mappedList}
    </div>
  );
}

export default AnswerList

// answer component? take in props.answer
