import React, { useState } from 'react';
import { Alert, Button, Row, Col, Container } from 'react-bootstrap';

const HelpfulBtn = (props) => {
  // Declare a new state variable, called "count"
  const [count, setCount] = useState(0);

  return (

      <span>Helpful? {' '}
      <Alert.Link
        className="helpful-click"
        variant="dark"
        size="sm"
        onClick={() => setCount(count + 1)}
      >
      Yes{`(${count}) `}
      </Alert.Link>
      <Alert.Link
        variant="dark"
        size="sm"
      //  onClick={() => setCount(count + 1)}
      >Add Answer
      </Alert.Link>
      </span>

  );
}

export default HelpfulBtn;
