/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-bootstrap';
// import {qIsHelpful} from './routes.js';

const HelpfulBtn = ({clickFunc, id, currentCount}) => {
  // increase count to sort by helpfulness
  const [count, setCount] = useState(currentCount);
  // toggle clickability. clicked? change state
  // const [clicked, setClicked] = useState(true);

  // useEffect(() => {
  //   setCount();
  // }, ['']);

  return (
    <span>Helpful? {' '}
      <Alert.Link
        className="helpful-click"
        variant="dark"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
          clickFunc(id);
        }}
      >
    Yes{`(${count}) `}
      </Alert.Link>
    </span>
  );
};

export default HelpfulBtn;
// props.question.answers.helpfulness
