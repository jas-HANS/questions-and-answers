import React from 'react';
import {Accordion, Card, Button, Row, Col, Alert} from 'react-bootstrap';
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

      {/* if answers.length > 2
      answers.slice(0,2)
      answers.slice(2, answers.length) */}
      <Accordion>
        <Accordion.Collapse
          eventKey="0">
          <Card.Body>
            <Row>
              <Col>A: This is one answer</Col>
            </Row>
            <Row>
              <Col>by User - seller, date |</Col>
              <Col><HelpfulBtn/></Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0">
          LOAD MORE ANSWERS
        </Accordion.Toggle>
      </Accordion>
      <br></br>
    </div>
  );
};

export default Question;
