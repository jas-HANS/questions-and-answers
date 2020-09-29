/* eslint-disable max-len */
import React, {useState} from 'react';
import Answer from './Answer.jsx';
import {Accordion, Button} from 'react-bootstrap';

const AnswerList = ({answers, isHelpfulA}) => {
  const sortedList = answers.sort((a, b) => b.helpfulness - a.helpfulness);
  const mappedList = sortedList.map((answer, i) => <Answer
    answer={answer}
    key={i}
    isHelpfulA={isHelpfulA}/>);

  // if answer.answerer_name === 'SELLER', assign it to mappedList[0]
  // mappedList.indexOf('seller') ? mappedList[0] =
  // mappedList.indexOf('seller') > -1 && [0]

  const [load, setLoad] = useState(true);

  return (
    <div className="answer-list">
      {console.log('mappedlist:', mappedList)}
      {mappedList.slice(0, 2)}
      {mappedList.length > 2 &&
        <Accordion>
          <Accordion.Collapse
            eventKey="0">
            <div>
              {mappedList.slice(2)}
            </div>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            onClick={() => setLoad(!load)}
          >
            {load && 'LOAD MORE ANSWERS'}{!load && 'COLLAPSE ANSWERS'}
          </Accordion.Toggle>
        </Accordion>}
    </div>
  );
};

export default AnswerList;
// answer component? take in props.answer
