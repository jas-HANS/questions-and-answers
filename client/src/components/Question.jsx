import React, { useState } from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import HelpfulBtn from './HelpfulBtn.jsx';

function Question(props) {
  // Declare a new state variable, which we'll call "count"
  // Use this for "helpful?" button
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Q: This is a Question{} <HelpfulBtn/></div>
      <div>A: This is one answer{}</div>
      <div>A: This is another answer{}</div>
      <div>A: And one last answer{}</div>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            LOAD MORE ANSWERS
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </div>
  );
}

export default Question;
