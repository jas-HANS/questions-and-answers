/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
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
  const btnRef = useRef();

  const onBtnClick = (e) => {
    if (btnRef.current) {
      btnRef.current.setAttribute('disabled', 'disabled');
      setCount(false);
    }
  };

  return (
    <span>Helpful? {' '}
      <Alert.Link
        className="helpful-click"
        // variant="dark"
        // size="sm"
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
          clickFunc(id);
          {onBtnClick;};
        }}
        ref={btnRef}
      >
    Yes{`(${count}) `}
      </Alert.Link>
    </span>
  );
};

export default HelpfulBtn;
// props.question.answers.helpfulness
