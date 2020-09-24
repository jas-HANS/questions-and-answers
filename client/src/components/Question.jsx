import React, { useState } from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';

function Question() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
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
