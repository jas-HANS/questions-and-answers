/* eslint-disable max-len */
import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Answer from './Answer.jsx';

const AnswerList = ({answers, isHelpfulA}) => {
  // abstracts seller; may be helpful later?
  // const isSeller = answers.filter((person) => person.answerer_name === 'SELLER');
  // .map((filteredPerson) => (
  //   {filteredPerson}
  // ));

  const mappedList = answers.map((answer, i) => <Answer
    answer={answer}
    key={i}
    isHelpfulA={isHelpfulA}/>);

  const [load, setLoad] = useState(true);

  return (
    <div className="q-a-answer-list">
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
            className="qa-accordion-toggle"
            as={Button}
            style={{marginLeft: '1.6%'}}
            variant="outline-dark"
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
