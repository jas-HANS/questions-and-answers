import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

const HelpfulBtn = () => {
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
    </span>
  );
};

export default HelpfulBtn;
// props.question.answers.helpfulness
