import React, { useState } from 'react';
import { Container, Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import AnswerList from './AnswerList.jsx';

const Question = ({question}) => {

  return (
    <div className="question">
      <Row>
        <Col>Q: {question.question_body}</Col>
      </Row>
      <br></br>
      <Row>
        <Col>
        <AnswerList
          //array of answers of x Q
          answers={Object.values(question.answers)}
        />
        </Col>
      </Row>

      <Accordion>
        <Accordion.Collapse
          eventKey="0">
          <Card.Body>
            {/* <Row>
              <Col>A: This is one answer</Col>
            </Row>
            <Row>
              <Col>by User - seller, date |</Col>
              <Col><HelpfulBtn/></Col>
            </Row> */}
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0">
          LOAD MORE ANSWERS
        </Accordion.Toggle>
      </Accordion>
    </div>
  );
}

export default Question;
