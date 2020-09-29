/* eslint-disable max-len */
import React, {useState} from 'react';
import Answer from './Answer.jsx';
import {Accordion, Button, Card} from 'react-bootstrap';

const AnswerList = ({answers, isHelpfulA}) => {
  const sortedList = answers.sort((a, b) => b.helpfulness - a.helpfulness);
  // const isSeller = answers.filter((e) => {return e.answerer_name});
  // console.log('isseller', isSeller);
  // if answer.answerer_name === 'SELLER', assign it to mappedList[0]
  // mappedList.indexOf('seller') ? mappedList[0] =
  // mappedList.indexOf('seller') > -1 && [0]

  const mappedList = sortedList.map((answer, i) => <Answer
    answer={answer}
    key={i}
    isHelpfulA={isHelpfulA}/>);

  const [load, setLoad] = useState(true);

  return (
    <div className="answer-list">
      {/* {isSeller.length && mappedList[0] === isSeller} */}
      {console.log('ml', mappedList)}
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
            className="accordion-toggle"
            as={Card.Header}
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
