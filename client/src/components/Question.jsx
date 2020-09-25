import React, { useState } from 'react';
import { Container, Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import HelpfulBtn from './HelpfulBtn.jsx';

const Question = ({qList, allAsForOneQ}) => {
  console.log("in Q:", qList)

  return (
    <div>
      <Row>
        <Col>Q: {qList.results[0].question_body}</Col>
      </Row>
      <Row>
        <Col>A: This is one answer</Col>
      </Row>
      <Row>
        <Col>by User - seller, date |</Col>
        <Col><HelpfulBtn/></Col>
      </Row>
      <Row>
        <Col>A: This is one answer</Col>
      </Row>
      <Row>
        <Col>by User - seller, date |</Col>
        <Col><HelpfulBtn/></Col>
      </Row>
      <Row>
        <Col>A: This is one answer</Col>
      </Row>
      <Row>
        <Col>by User - seller, date |</Col>
        <Col><HelpfulBtn/></Col>
      </Row>
      <Accordion>
        <Accordion.Collapse eventKey="0">
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
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          LOAD MORE ANSWERS
        </Accordion.Toggle>
      </Accordion>
    </div>
  );
}

export default Question;
