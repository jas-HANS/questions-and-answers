import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

const HelpfulBtn = ({clickFunc, id, currentCount}) => {
  const [count, setCount] = useState(currentCount);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setDisabled(!disabled);
  };

  // STRETCH GOAL, one click votes helpful,
  // additional click removes helpful
  // const handleXtraClick = () => {
  //   setCount(count - 1);
  //   setDisabled(!disabled);
  // };

  return (
    <span>Helpful? {' '}
      <Alert.Link
        className="helpful-click"
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          clickFunc(id);
          handleClick();
          // handleXtraClick();
        }}
      >Yes{`(${count}) `}
      </Alert.Link>
    </span>
  );
};

export default HelpfulBtn;
