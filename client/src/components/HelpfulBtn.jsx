import React, { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';

const Helpful = (props) => {
  // Declare a new state variable, called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <Row>
        <span>
          Helpful?
         </span>
         <Button
          variant="dark"
          size="sm"
          onClick={() => setCount(count + 1)}
         >
          Yes{`(${count})`}
         </Button>
         <Button
          variant="dark"
          size="sm"
         //  onClick={() => setCount(count + 1)}
         >Add Answer
         </Button>
      </Row>
    </div>
  );
}

export default Helpful;
