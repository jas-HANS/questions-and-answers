import React, {useState} from 'react';

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
        onClick={!disabled ? handleClick : null}
      >Yes{`(${count}) `}
      </a>
    </span>
  );
};

export default HelpfulBtn;
