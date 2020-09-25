import React, { useState } from 'react';
import { Container, Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import HelpfulBtn from './HelpfulBtn.jsx';

function Question(props) {
  // Declare a new state variable, which we'll call "count"
  // Use this for "helpful?" button
  const [count, setCount] = useState(0);

  return (
    <div>
      <Row>
        <Col>Q: This is a Question</Col>
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
