import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

const HelpfulBtn = ({clickFunc, id, currentCount}) => {
  const [count, setCount] = useState(currentCount);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    clickFunc(id);
    setCount(count + 1);
    setDisabled(!disabled);
  };

  return (
    <span>Helpful? {' '}
      <a
        className="helpful-click"
        disabled={disabled}
        onClick={!disabled ? handleClick : null}
      >Yes{`(${count}) `}
      </a>
    </span>
  );
};

export default HelpfulBtn;

// STRETCH GOAL, one click votes helpful,
// additional click removes helpful
// const handleXtraClick = () => {
//   setCount(count - 1);
//   setDisabled(!disabled);
// };
