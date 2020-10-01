/* eslint-disable max-len */
import React, {useState} from 'react';
import Answer from './Answer.jsx';
import {Accordion, Button, Card} from 'react-bootstrap';

const AnswerList = ({answers, isHelpfulA}) => {
  // abstracts seller; may be helpful later?
  // const isSeller = answers.filter((person) => person.answerer_name === 'SELLER' || person.answerer_name === 'Seller');
  // .map((filteredPerson) => (
  //   {filteredPerson}
  // ));

  const sortedList = answers.sort((a, b) => {
    if (b.answerer_name === 'SELLER' || b.answerer_name === 'Seller') {
      return 1;
    }
    return b.helpfulness - a.helpfulness;
  });

  const mappedList = sortedList.map((answer, i) => <Answer
    answer={answer}
    key={i}
    isHelpfulA={isHelpfulA}/>);

  const [load, setLoad] = useState(true);

  return (
    <div className="answer-list">
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
