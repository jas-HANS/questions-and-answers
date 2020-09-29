/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
import {Alert} from 'react-bootstrap';
// import {qIsHelpful} from './routes.js';

const HelpfulBtn = ({clickFunc, id, currentCount}) => {
  // increase count to sort by helpfulness
  const [count, setCount] = useState(currentCount);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setDisabled(!disabled);
  };

  return (
    <span>Helpful? {' '}
      <Alert.Link
        className="helpful-click"
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          clickFunc(id); handleClick();
        }}
      >Yes{`(${count}) `}
      </Alert.Link>
    </span>
  );
};

export default HelpfulBtn;
