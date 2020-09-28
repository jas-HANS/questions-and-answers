/* eslint-disable max-len */
import React from 'react';
import {Accordion, Button} from 'react-bootstrap';
import Question from './Question';

// eslint-disable-next-line react/prop-types
const QuestionList = ({qList}) => {
  // eslint-disable-next-line react/prop-types
  const mappedList = qList.map((quest, i) => <Question
    question={quest}
    key={i}/>);

  return (
    <div>
      <div className="question-list">
        {mappedList.slice(0, 4)}
        {mappedList.length > 4 &&
        <Accordion>
          <Accordion.Collapse
            eventKey="0">
            <div>
              {mappedList.slice(4)}
            </div>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0">
            LOAD MORE QUESTIONS
          </Accordion.Toggle>
        </Accordion>}
        {mappedList.length < 1 &&
        <Button variant="secondary" size="sm">ADD A QUESTION</Button>}
      </div>
      <div>
        {mappedList.length > 0 &&
      <><br></br><Button variant="secondary" size="sm">ADD A QUESTION</Button>
      </>}
      </div>
    </div>

  );
};

export default QuestionList;
